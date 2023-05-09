import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import Stripe from 'stripe'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

// POST /api/stripe/user-subscription/portal
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    try {
      const { input, session_variables } = req.body

      const customerId = session_variables['x-hasura-stripe-customer-id']
      if (!customerId) {
        const error = new Error('Stripe customer id not found')
        ;(error as any).statusCode = 400
        throw error
      }

      const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env['NEXT_PUBLIC_BASE_URL']}${
          input.path || '/'
        }`,
      })

      return res.json({
        link: session.url,
      })
    } catch (e) {
      console.error(e)
      res.status((e as any)?.statusCode || 500).json((e as Error)?.message)
    }
  }
)

export default handler
