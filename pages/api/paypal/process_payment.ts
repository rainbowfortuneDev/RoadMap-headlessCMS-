import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { updatePostPayment } from '../../../src/utils/stripe/post-payment/post-payment-helpers'

export default nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    try {
      const post_id = JSON.parse(req.body).post_id
      if (!post_id) res.status(400).send('Invalid input')
      await updatePostPayment({
        post_id,
        promotion_status: 8, //Processing status
      })
    } catch (e) {
      console.log(e)
    }
  }
)
