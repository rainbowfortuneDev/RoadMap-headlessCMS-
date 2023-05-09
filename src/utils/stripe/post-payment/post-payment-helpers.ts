import { gql } from 'graphql-request'
import Stripe from 'stripe'
import {
  Posts as PostType,
  Users as UserType,
} from '../../../generated/graphql'
import { hasuraServerRequest } from '../../hasura/hasura-server-request'

import {
  STRIPE_PRODUCT_POST_SPONSORSHIP_INDIVIDUAL,
  STRIPE_PRODUCT_POST_SUBSCRIPTION_INDIVIDUAL,
  STRIPE_PRODUCT_POST_SPONSORSHIP_BUSINESS,
  STRIPE_PRODUCT_POST_SUBSCRIPTION_BUSINESS,
  STRIPE_PRODUCT_POST_SUBSCRIPTION_NATIONAL_BUSINESS,
  NEXT_PUBLIC_PAYPAL_SPONSORSHIP_INDIVIDUAL,
  NEXT_PUBLIC_PAYPAL_SPONSORSHIP_BUSINESS,
  NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_INDIVIDUAL,
  NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_BUSINESS,
  NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_NATIONAL_BUSINESS,
} from '../../config'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

export async function isPostNational(post_id: number) {
  type PostsResponse = (Pick<
    PostType,
    'id' | 'title' | 'alt_id' | 'promotion_status' | 'stripe_customer_id'
  > & {
    user: Pick<
      UserType,
      'id' | 'alt_id' | 'email' | 'full_name' | 'business_size'
    >
  })[]
  const { posts } = await hasuraServerRequest<
    { posts: PostsResponse },
    { post_id: number }
  >(
    gql`
      query IsPostNational($post_id: bigint!) {
        posts(limit: 1, where: { id: { _eq: $post_id } }) {
          id
          alt_id
          title
          promotion_status
          user {
            id
            alt_id
            email
            full_name
            business_size
          }
        }
      }
    `,
    { post_id }
  )
  const post = posts[0]
  if (!post) {
    throw new Error('Post not found')
  }
  const user = post.user
  if (!user) {
    throw new Error('User not found')
  }

  return {
    isNational: post.promotion_status === 3 && post.stripe_customer_id,
    post,
    user,
  }
}

export async function getStripePostProductId(
  post_id: number,
  updated_post_is_local: boolean | null
) {
  const isPostNationalReturns = await isPostNational(post_id)
  const user = isPostNationalReturns.user

  if (updated_post_is_local === null) {
    updated_post_is_local = isPostNationalReturns.post.promotion_status === 1
  }

  let productId: string | undefined
  switch (user.business_size) {
    case 'INDIVIDUAL':
      productId = updated_post_is_local
        ? STRIPE_PRODUCT_POST_SPONSORSHIP_INDIVIDUAL
        : STRIPE_PRODUCT_POST_SUBSCRIPTION_INDIVIDUAL
      break

    case 'LOCAL_BUSINESS':
      productId = updated_post_is_local
        ? STRIPE_PRODUCT_POST_SPONSORSHIP_BUSINESS
        : STRIPE_PRODUCT_POST_SUBSCRIPTION_BUSINESS
      break

    default:
      productId = STRIPE_PRODUCT_POST_SUBSCRIPTION_NATIONAL_BUSINESS
    // throw new Error('Invalid business size')
  }
  if (!productId) {
    throw new Error('Product ID not supported')
  }

  return {
    productId,
    ...isPostNationalReturns,
  }
}

export async function updatePostPayment(input: {
  post_id: number
  promotion_status: number
  stripe_customer_id?: string
  paypal_subscription_id?: string
}) {
  console.log('UpdatePostPayment in post_payment_helpers: ')
  //console.log( 'helper post_id:', post_id )
  //console.log( 'helper promotion_status:', promotion_status )

  return hasuraServerRequest(
    gql`
      mutation UpdatePostPayment(
        $post_id: bigint!
        $promotion_status: smallint!
        $stripe_customer_id: String
        $paypal_subscription_id: String
      ) {
        update_posts(
          where: { _and: { id: { _eq: $post_id } } }
          _set: {
            stripe_customer_id: $stripe_customer_id
            paypal_subscription_id: $paypal_subscription_id
            promotion_status: $promotion_status
          }
        ) {
          affected_rows
          returning {
            id
          }
        }
      }
    `,
    input
  )
}

export async function cancelOtherStripePostPayments(
  post_id: number,
  activeProductId: string
) {
  const { post } = await getStripePostProductId(post_id, null)

  const { data: allActiveSubscriptions } = await stripe.subscriptions.list({
    status: 'active',
  })
  const otherPostSubscriptions = allActiveSubscriptions.filter(
    (s) =>
      s.metadata?.post_id === post.id &&
      !s.items.data.find((i) => i.price.product === activeProductId)
  )

  await Promise.all(
    otherPostSubscriptions.map((subscription) =>
      stripe.subscriptions.update(subscription.id, {
        cancel_at_period_end: true,
      })
    )
  )
}

export async function updateLastPaymentDateAndActivate(subscriptionId: string) {
  await hasuraServerRequest<
    { update_payments: { id: number } },
    { stripe_subscription_id: string }
  >(
    gql`
      mutation UpdateLastPaymentDate(
        $last_payment: timestamptz
        $stripe_subscription_id: String
      ) {
        update_payments(
          where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
          _set: { active: true, last_payment: "now()" }
        ) {
          returning {
            id
          }
        }
       on_conflict: {
            update_columns: last_payment
            constraint: active_only_1_true
        }
      }
    `,
    {
      stripe_subscription_id: subscriptionId,
    }
  )
}

export async function recordNewPayment(
  stripe_subscription_id: string,
  post_id: number,
  promotion_id: number
) {
  await hasuraServerRequest<
    { insert_payments_one: { id: number } },
    {
      stripe_subscription_id: string
      post_id: number
      promotion_id: number
    }
  >(
    gql`
      mutation RecordNewPayment(
        $stripe_subscription_id: String!
        $post_id: bigint
        $promotion_id: smallint
      ) {
        insert_payments_one(
          object: {
            active: true
            stripe_subscription_id: $stripe_subscription_id
            post_id: $post_id
            last_payment: "now()"
            status: ACTIVE
            promotion_id: $promotion_id
            payment_method: Stripe
          }
        ) {
          id
        }
      }
    `,
    {
      stripe_subscription_id,
      post_id,
      promotion_id,
    }
  )
}

export async function deactivatePaymentRecord(stripe_subscription_id: string) {
  await hasuraServerRequest<
    { update_payments: { affected_rows: number } },
    { stripe_subscription_id: string }
  >(
    gql`
      mutation DeactivatePaymentRecord($stripe_subscription_id: String) {
        update_payments(
          where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
          _set: { active: false }
        ) {
          affected_rows
          returning {
            stripe_subscription_id
          }
        }
      }
    `,
    { stripe_subscription_id }
  )
}

export function getPromotionsFromPlan(plan_id?: string) {
  if (
    [
      STRIPE_PRODUCT_POST_SPONSORSHIP_INDIVIDUAL!,
      NEXT_PUBLIC_PAYPAL_SPONSORSHIP_INDIVIDUAL!,
    ].includes(plan_id!)
  ) {
    return { promotion_status: 1, promotion_id: 1 }
  } else if (
    [
      STRIPE_PRODUCT_POST_SPONSORSHIP_BUSINESS,
      NEXT_PUBLIC_PAYPAL_SPONSORSHIP_BUSINESS,
    ].includes(plan_id!)
  ) {
    return { promotion_status: 1, promotion_id: 2 }
  } else if (
    [
      STRIPE_PRODUCT_POST_SUBSCRIPTION_INDIVIDUAL,
      NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_INDIVIDUAL,
    ].includes(plan_id!)
  ) {
    return { promotion_status: 2, promotion_id: 3 }
  } else if (
    [
      STRIPE_PRODUCT_POST_SUBSCRIPTION_BUSINESS,
      NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_BUSINESS,
    ].includes(plan_id!)
  ) {
    return { promotion_status: 2, promotion_id: 4 }
  } else if (
    [
      STRIPE_PRODUCT_POST_SUBSCRIPTION_NATIONAL_BUSINESS,
      NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_NATIONAL_BUSINESS,
    ]
  ) {
    return { promotion_status: 3, promotion_id: 5 }
  }
  return { promotion_status: 4, promotion_id: undefined }
}
