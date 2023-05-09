import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

import { getStripePostProductId } from '../post-payment/post-payment-helpers'

// import { STRIPE_PRODUCT_USER_SUBSCRIPTION } from '../../config'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

export async function onUserSubscriptionDeleted(
  subscription: Stripe.Subscription
) {
  const { user_id, post_id, updated_post_is_local } =
    subscription.metadata || {}
  if (
    !user_id ||
    !post_id ||
    updated_post_is_local === undefined ||
    updated_post_is_local === null
  ) {
    return false
  }

  // console.log(' subscription: ', subscription.items.data)

  const { productId } = await getStripePostProductId(
    Number(post_id),
    updated_post_is_local === 'true'
  )

  if (
    !subscription.items?.data.find((item) => item.price?.product === productId)
  ) {
    return false
  }

  //console.log('on_user_subcription_deleted')

  const user = (await stripe.customers.retrieve(
    subscription.customer.toString()
  )) as Stripe.Customer

  // console.log('user-on-user-subcription-deleted: ', user)

  if (subscription) {
    await hasuraServerRequest<
      {
        update_payments: { affected_rows: number }
      },
      {
        stripe_subscription_id: string
        email: string
      }
    >(
      gql`
        mutation M($stripe_subscription_id: String, $email: String) {
          update_payments(
            where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
            _set: { active: false }
          ) {
            affected_rows
            stripe_subscription_id
          }
        }
      `,
      {
        email: user.email!,
        stripe_subscription_id: subscription.id as string,
      }
    )

    return true
  }

  return false
}
