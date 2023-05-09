import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import Stripe from 'stripe'
import { email } from '../../../src/utils/email/mailgun'
import { cancelEmailTemplate } from '../../../src/utils/strapi/email_templates'

import {
  isPostNational,
  updatePostPayment,
  deactivatePaymentRecord,
} from '../../../src/utils/stripe/post-payment/post-payment-helpers'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

function GetBusnessSize(business_size) {
  if (business_size == 'INDIVIDUAL') {
    return `Indiviual`
  } else if (business_size == 'LOCAL_BUSINESS') {
    return `Local Business`
  } else if (business_size == 'NATIONAL_BUSINESS') {
    return `National Business`
  }
}

// POST /api/stripe/cancel
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    try {
      if (
        !/^hasura\-graphql-engine\//.test(req.headers['user-agent'] ?? '') ||
        req.headers.secret !== process.env['EVENT_WEBHOOK_SECRET']
      ) {
        return res.status(401).json('Unauthorized')
      }

      const { post_id, sub_id } = req.body.input
      if (!sub_id || !post_id) throw new Error('Invalid input data')

      const response: any = await stripe.subscriptions.retrieve(sub_id)
      const { post, user } = await isPostNational(Number(post_id))

      if (response.cancel_at) {
        await deactivatePaymentRecord(sub_id)
        await updatePostPayment({
          post_id,
          promotion_status: user.business_size == 'NATIONAL_BUSINESS' ? 10 : 4,
        })
      } else {
        const response: any = await stripe.subscriptions.del(sub_id)

        if (response.status === 'canceled') {
          const isLocal = post.promotion_status === 1

          await updatePostPayment({
            post_id,
            promotion_status:
              user.business_size == 'NATIONAL_BUSINESS' ? 10 : 4,
          })

          await deactivatePaymentRecord(sub_id)

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
              .replace('{ORDER_NO}', sub_id)
              .replace(
                '{BUSINESS_SIZE}',
                GetBusnessSize(user.business_size) || ''
              )
              .replace('{POST_TITLE}', post.title)
              .replace(
                '{AMOUNT}',
                (response.plan.amount ? response.plan.amount / 100 : 0) + ''
              ),
          })
          return res.send('Subscription canceled')
        }
      }

      return res.status(500).json('Failed to cancel subscription')
    } catch (e) {
      console.error(e)
      res.status((e as any)?.statusCode || 500).json((e as Error)?.message)
    }
  }
)

export default handler
