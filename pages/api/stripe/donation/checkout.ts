import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import Stripe from 'stripe'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

// POST /api/stripe/donation/checkout
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const { data: prices } = await stripe.prices.list({
      product: process.env['STRIPE_PRODUCT_DONATION'],
      type: 'one_time',
    })

    try {
      const session = await stripe.checkout.sessions.create({
        customer_email: req.body?.email || undefined,
        submit_type: 'donate',
        billing_address_collection: 'auto',
        payment_method_types: ['card'],
        line_items: prices
          .filter((price) => price.active)
          .map((price) => ({ price: price.id, quantity: 1 })),
        mode: 'payment',
        success_url: `${req.headers.origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/donate/cancelled`,
      })

      res.redirect(303, session.url!)
    } catch (e) {
      res.status((e as any)?.statusCode || 500).json((e as Error)?.message)
    }
  }
)

export default handler
