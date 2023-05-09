import nextConnect from 'next-connect'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'
import { gql } from 'graphql-request'
import {
  getPromotionsFromPlan,
  isPostNational,
  updatePostPayment,
} from '../../../src/utils/stripe/post-payment/post-payment-helpers'
import { email } from '../../../src/utils/email/mailgun'
import {
  cancelEmailTemplate,
  failedEmailTemplate,
  successEmailTemplate,
} from '../../../src/utils/strapi/email_templates'

import { NEXT_PUBLIC_PAYPAL_API_URL } from '../../../src/utils/config'

function GetBusnessSize(business_size) {
  if (business_size == 'INDIVIDUAL') {
    return `Indiviual`
  } else if (business_size == 'LOCAL_BUSINESS') {
    return `Local Business`
  } else if (business_size == 'NATIONAL_BUSINESS') {
    return `National Business`
  }
}

// POST /api/paypal/webhook
export default nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    if (!(await verifyPaypalWebhook(req))) {
      console.log('Webhook is not verified')
      return
    }
    try {
      const event = req.body.event_type
      const data = req.body.resource
      const post_id = +data.custom_id
      if (!post_id) return

      const { promotion_id, promotion_status } = getPromotionsFromPlan(
        data.plan_id
      )
      const isLocal = promotion_id === 1
      const amount = data?.billing_info?.last_payment?.amount?.value
      const { post, user } = await isPostNational(Number(post_id))
      // console.log('Webhook event', data?.subscriber, post_id)

      switch (event) {
        case 'BILLING.SUBSCRIPTION.ACTIVATED': {
          await insertPaymentMutation({
            post_id,
            paypal_subscription_id: data.id,
            promotion_id: promotion_id!,
          })
          await updatePostPayment({
            post_id,
            paypal_subscription_id: data.id,
            promotion_status,
          })
          await email({
            to: user.email,
            subject: `${
              isLocal ? 'SPONSORSHIP' : 'SUBSCRIPTION'
            } - Order Confirmation`,
            html: successEmailTemplate
              .replace('{USER_NAME}', user.full_name)
              .replace(
                '{SUBSCRIPTION}',
                isLocal ? 'sponsoring' : 'subscribing to'
              )
              .replace('{ORDER_NO}', data.id)
              .replace(
                '{BUSINESS_SIZE}',
                GetBusnessSize(user.business_size) || ''
              )
              .replace('{POST_TITLE}', post.title)
              .replace('{AMOUNT}', amount),
          })
          break
        }
        case 'BILLING.SUBSCRIPTION.CANCELLED': {
          await email({
            to: user.email,
            subject: `CANCEL ${
              isLocal ? 'SPONSORSHIP' : 'SUBSCRIPTION'
            } - Order Confirmation`,
            html: cancelEmailTemplate
              .replace('{USER_NAME}', user.full_name)
              .replace(
                '{SUBSCRIPTION}',
                isLocal ? 'sponsoring' : 'subscribing to'
              )
              .replace('{ORDER_NO}', data.id)
              .replace('{BUSINESS_SIZE}', user.business_size || '')
              .replace('{POST_TITLE}', post.title)
              .replace('{AMOUNT}', amount),
          })
          await updatePostPayment({
            post_id,
            paypal_subscription_id: data.id,
            promotion_status:
              user.business_size == 'NATIONAL_BUSINESS' ? 10 : 4,
          })
          break
        }
        case 'BILLING.SUBSCRIPTION.PAYMENT.FAILED': {
          await email({
            to: user.email,
            subject: `${
              isLocal ? 'SPONSORSHIP' : 'SUBSCRIPTION'
            } - Order failure`,
            html: failedEmailTemplate
              .replace('{USER_NAME}', user.full_name)
              .replace(
                '{SUBSCRIPTION}',
                isLocal ? 'sponsoring' : 'subscribing to'
              )
              .replace('{ORDER_NO}', data.id)
              .replace('{BUSINESS_SIZE}', user.business_size || '')
              .replace('{POST_TITLE}', post.title)
              .replace('{AMOUNT}', amount),
          })
          await updatePostPayment({
            post_id,
            paypal_subscription_id: data.id,
            promotion_status:
              user.business_size == 'NATIONAL_BUSINESS' ? 10 : 4,
          })
          break
        }
        default:
          break
      }
      res.send('OK')
    } catch (e) {
      console.error('paypal/webhook:', JSON.stringify(e, null, 2))
      res.status(400).send('Webhook Error')
    }
  }
)

async function insertPaymentMutation(input: {
  post_id: number
  paypal_subscription_id: number
  promotion_id: number
}) {
  return hasuraServerRequest(
    gql`
      mutation insert_payments_one(
        $post_id: bigint!
        $paypal_subscription_id: String!
        $promotion_id: smallint!
      ) {
        insert_payments_one(
          object: {
            post_id: $post_id
            paypal_subscription_id: $paypal_subscription_id
            promotion_id: $promotion_id
            payment_method: PayPal
            status: ACTIVE
            last_payment: "now()"
          }
          on_conflict: {
            update_columns: paypal_subscription_id
            where: { post_id: { _eq: $post_id }, active: { _eq: true } }
            constraint: active_only_1_true
          }
        ) {
          id
        }
      }
    `,
    input
  )
}

async function verifyPaypalWebhook(req: NextApiRequest) {
  try {
    const { data: dataToken } = await axios.post(
      NEXT_PUBLIC_PAYPAL_API_URL + '/v1/oauth2/token',
      `grant_type=client_credentials`,
      {
        headers: {
          'Content-Type': 'x-www-form-urlencoded',
        },
        auth: {
          username: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
          password: process.env.PAYPAL_SECRET_KEY!,
        },
      }
    )
    const { data } = await axios.post(
      NEXT_PUBLIC_PAYPAL_API_URL + '/v1/notifications/verify-webhook-signature',
      {
        auth_algo: req.headers['paypal-auth-algo'],
        cert_url: req.headers['paypal-cert-url'],
        transmission_id: req.headers['paypal-transmission-id'],
        transmission_sig: req.headers['paypal-transmission-sig'],
        transmission_time: req.headers['paypal-transmission-time'],
        webhook_id: process.env.PAYPAL_WEBHOOK_ID,
        webhook_event: req.body,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + dataToken.access_token,
        },
      }
    )
    return data?.verification_status === 'SUCCESS'
  } catch (e) {
    return false
  }
}
