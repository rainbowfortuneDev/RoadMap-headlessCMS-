import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import Stripe from 'stripe'

import { getStripePostProductId } from '../../../../src/utils/stripe/post-payment/post-payment-helpers'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

// POST /api/stripe/post-payment/checkout
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    try {
      if (
        !/^hasura\-graphql-engine\//.test(req.headers['user-agent'] ?? '') ||
        req.headers.secret !== process.env['EVENT_WEBHOOK_SECRET']
      ) {
        res.status(401).send('Unauthorized')
        return
      }

      const { input, session_variables } = req.body

      const post_id = input.post_id
      if (!post_id) {
        throw new Error('Post ID not found in input')
      }
      const updated_post_is_local = input.updated_post_is_local
      if (
        updated_post_is_local === undefined ||
        updated_post_is_local === null
      ) {
        throw new Error('Updated post is local not found in input')
      }
      const user_id = session_variables['x-hasura-user-id']
      if (!user_id) {
        throw new Error('User ID not found in session')
      }

      const { productId, isNational, post, user } =
        await getStripePostProductId(post_id, updated_post_is_local)

      // if (user.business_size === 'NATIONAL_BUSINESS') {
      //   const error = new Error('National business is not supported')
      //   ;(error as any).statusCode = 403
      //   throw error
      // }

      const { data: prices } = await stripe.prices.list({
        product: productId,
        type: 'recurring',
      })

      let url: string | null
      if (isNational) {
        const session = await stripe.billingPortal.sessions.create({
          customer: post.stripe_customer_id!,
          return_url: `${process.env['NEXT_PUBLIC_BASE_URL']}/post/${post.title
            .toLowerCase()
            .replace(/\s/g, '%20')}/${post.alt_id}`,
        })
        url = session.url
      } else {
        const session = await stripe.checkout.sessions.create({
          customer_email: user.email,
          customer: user.email
            ? undefined
            : post.stripe_customer_id || undefined,
          billing_address_collection: 'auto',
          payment_method_types: ['card'],
          line_items: prices
            .filter((price) => price.active)
            .map((price) => ({ price: price.id, quantity: 1 })),
          mode: 'subscription',
          success_url: `${process.env['NEXT_PUBLIC_BASE_URL']}/post/${post.title
            .toLowerCase()
            .replace(/\s/g, '%20')}/${post.alt_id}`,
          cancel_url: `${process.env['NEXT_PUBLIC_BASE_URL']}/post/${post.title
            .toLowerCase()
            .replace(/\s/g, '%20')}/${post.alt_id}`,
          metadata: {
            user_id: String(user.id),
            post_id: String(post.id),
            updated_post_is_local: String(updated_post_is_local),
          },
        })
        url = session.url
      }

      res.json({ url })
    } catch (e) {
      console.log('Error:', e)

      res.status((e as any)?.statusCode || 500).json((e as Error)?.message)
    }
  }
)

export default handler
