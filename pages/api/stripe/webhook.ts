import { buffer } from 'micro'
import nextConnect from 'next-connect'
import Stripe from 'stripe'
import { onDonateSuccedded } from '../../../src/utils/stripe/donation/on-donation-succedded'
import { onPostPaymentCreated } from '../../../src/utils/stripe/post-payment/on-post-payment-created'
import { onPostPaymentDeleted } from '../../../src/utils/stripe/post-payment/on-post-payment-deleted'
import { onPostPaymentInvoiceFailed } from '../../../src/utils/stripe/post-payment/on-post-payment-invoice-failed'
import { onPostPaymentInvoicePaid } from '../../../src/utils/stripe/post-payment/on-post-payment-invoice-paid'
import { onUserSubscriptionCreated } from '../../../src/utils/stripe/user-subscription/on-user-subscription-created'
import { onUserSubscriptionDeleted } from '../../../src/utils/stripe/user-subscription/on-user-subscription-deleted'
import { onUserSubscriptionInvoiceFailed } from '../../../src/utils/stripe/user-subscription/on-user-subscription-invoice-failed'
import { onUserSubscriptionInvoicePaid } from '../../../src/utils/stripe/user-subscription/on-user-subscription-invoice-paid'
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next'
import { email } from '../../../src/utils/email/mailgun'
import { isPostNational } from '../../../src/utils/stripe/post-payment/post-payment-helpers'

import {
  failedEmailTemplate,
  successEmailTemplate,
} from '../../../src/utils/strapi/email_templates'

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

// POST /api/stripe/webhook
export default nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    let event
    try {
      event = stripe.webhooks.constructEvent(
        await buffer(req), //payload
        req.headers['stripe-signature']!, //sig
        process.env['STRIPE_WEBHOOK_SECRET']!
      )
    } catch (e) {
      console.error('POST /api/stripe/webhook:', e)
      res.status(400).send(`Webhook Error: ${(e as Error)?.message}`)
      return
    }

    console.log('Webhook event', event.type)

    const responses: boolean[] = []
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        if (session.payment_status === 'paid') {
          const post_id = session.metadata?.post_id
          const isLocal = session.metadata?.updated_post_is_local === 'true'
          if (post_id) {
            const { post, user } = await isPostNational(Number(post_id))
            responses.push(
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
                  .replace('{ORDER_NO}', session.subscription?.toString() || '')
                  .replace(
                    '{BUSINESS_SIZE}',
                    GetBusnessSize(user.business_size) || ''
                  )
                  .replace('{POST_TITLE}', post.title)
                  .replace(
                    '{AMOUNT}',
                    (session.amount_total ? session.amount_total / 100 : 0) + ''
                  ),
              })
            )
          }
          responses.push(
            await Promise.all([
              onDonateSuccedded(session),
              onPostPaymentCreated(session),
              onUserSubscriptionCreated(session),
            ]).then(() => true)
          )
        } else {
          responses.push(true)
        }

        break
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session
        responses.push(await onDonateSuccedded(session))
        responses.push(await onPostPaymentCreated(session))
        responses.push(await onUserSubscriptionCreated(session))

        break
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice
        responses.push(await onPostPaymentInvoicePaid(invoice))
        responses.push(await onUserSubscriptionInvoicePaid(invoice))
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        responses.push(await onPostPaymentInvoiceFailed(invoice))
        responses.push(await onUserSubscriptionInvoiceFailed(invoice))

        const post_id = invoice.metadata?.post_id
        if (post_id) {
          const { post_id } = invoice.metadata || {}
          const { post, user } = await isPostNational(Number(post_id))
          const isLocal = post.promotion_status === 1
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
              .replace('{ORDER_NO}', post.stripe_customer_id || '')
              .replace(
                '{BUSINESS_SIZE}',
                GetBusnessSize(user.business_size) || ''
              )
              .replace('{POST_TITLE}', post.title)
              .replace('{AMOUNT}', invoice.amount_due / 100 + ''),
          })
        }
        break
      }
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        responses.push(await onPostPaymentDeleted(sub))
        responses.push(await onUserSubscriptionDeleted(sub))
      }
    }

    if (!responses.find((r) => r === true)) {
      res
        .status(400)
        .send('Webhook Error: Unknown event or unsupported handler')
      return
    }

    res.status(204).end()
  }
)

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
