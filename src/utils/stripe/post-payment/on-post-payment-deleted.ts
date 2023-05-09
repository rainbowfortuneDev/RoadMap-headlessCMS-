import Stripe from 'stripe'
import {
  deactivatePaymentRecord,
  getStripePostProductId,
} from './post-payment-helpers'

//const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
//  apiVersion: '2020-08-27',
//})

export async function onPostPaymentDeleted(subscription: Stripe.Subscription) {
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

  const { productId, isNational } = await getStripePostProductId(
    Number(post_id),
    updated_post_is_local === 'true'
  )

  console.log(' isNational1: ', isNational)

  if (
    !subscription.items?.data.find((item) => item.price?.product === productId)
  ) {
    return false
  }

  if (subscription) {
    const subscriptionId =
      typeof subscription === 'string' ? subscription : subscription?.id
    if (!subscriptionId) {
      await deactivatePaymentRecord(subscriptionId)

      // throw new Error('Subscription ID not found')
    }

    //if (isNational) {
    //  await updatePostPayment({
    //    post_id: Number(post_id),
    //    promotion_status: getPromotionsFromPlan(productId).promotion_status,
    //    stripe_customer_id:
    //      typeof subscription.customer === 'string'
    //       ? subscription.customer
    //        : subscription.customer?.id,
    // })
    //}
    await deactivatePaymentRecord(subscriptionId)

    return true
  }

  return false
}
