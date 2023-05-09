import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import Stripe from 'stripe'

import { STRIPE_PRODUCT_USER_SUBSCRIPTION } from '../../../../src/utils/config'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

// POST /api/stripe/user-subscription/checkout
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    try {
      const { data: prices } = await stripe.prices.list({
        product: STRIPE_PRODUCT_USER_SUBSCRIPTION,
        type: 'recurring',
      })

      const session = await stripe.checkout.sessions.create({
        customer_email: req.body?.email || undefined,
        billing_address_collection: 'auto',
        payment_method_types: ['card'],
        line_items: prices
          .filter((price) => price.active)
          .map((price) => ({ price: price.id, quantity: 1 })),
        mode: 'subscription',
        success_url: `${
          req.headers.origin
        }/settings/seller-profile?onboarding=${
          req.body.onboarding ? '1' : '0'
        }`,
        cancel_url: `${req.headers.origin}/settings/seller-profile?onboarding=${
          req.body.onboarding ? '1' : '0'
        }`,
        metadata: {
          user_id: req.body.user_id,
        },
      })

      res.json({ url: session.url! })
    } catch (e) {
      res.status((e as any)?.statusCode || 500).json((e as Error)?.message)
    }
  }
)

export default handler
