import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

// import { STRIPE_PRODUCT_USER_SUBSCRIPTION } from '../../config'

export async function onUserSubscriptionInvoicePaid(invoice: Stripe.Invoice) {
  const { user_id, post_id, updated_post_is_local } = invoice.metadata || {}

  if (
    !user_id ||
    !post_id ||
    updated_post_is_local === undefined ||
    updated_post_is_local === null
  ) {
    return false
  }

  // update the fee's last payment date and status to active and type subscription

  if (invoice.subscription) {
    await hasuraServerRequest<
      { update_payments: { id: number } },
      { stripe_subscription_id: string; last_payment: Date }
    >(
      gql`
        mutation M(
          $last_payment: timestamptz
          $stripe_subscription_id: String
        ) {
          update_payments(
            where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
            _set: { last_payment: $last_payment, active: true }
          ) {
            returning {
              id
            }
          }
        }
      `,
      {
        stripe_subscription_id: invoice.subscription as string,
        last_payment: new Date(),
      }
    )

    return true
  }

  return false
}
