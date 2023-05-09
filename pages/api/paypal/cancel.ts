import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { updatePostPayment } from '../../../src/utils/stripe/post-payment/post-payment-helpers'

import { NEXT_PUBLIC_PAYPAL_API_URL } from '../../../src/utils/config'

// POST /api/paypal/cancel
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

      //console.log('here is paypal cancel')

      const { sub_id, post_id } = req.body.input
      // console.log('Cancel subscription', sub_id, post_id)

      if (!sub_id || !post_id) return res.status(403).send('Invalid input data')

      updatePostPayment({
        post_id,
        promotion_status: 8, // Processing
      })
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
      const { data, status } = await axios.post(
        NEXT_PUBLIC_PAYPAL_API_URL +
          `/v1/billing/subscriptions/${sub_id}/cancel`,
        {
          reason: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + dataToken.access_token,
          },
        }
      )
      if (status === 204) {
        return res.json('Subscription canceled')
      }
      //console.log('data', data)

      return res.status(400).json(data)
    } catch (e) {
      console.error(e)
      res.status((e as any)?.statusCode || 500).json((e as Error)?.message)
    }
  }
)
export default handler
