import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

// import { STRIPE_PRODUCT_USER_SUBSCRIPTION } from '../../../../src/utils/config'

export async function onUserSubscriptionInvoiceFailed(invoice: Stripe.Invoice) {
  const { user_id, post_id, updated_post_is_local } = invoice.metadata || {}
  if (
    !user_id ||
    !post_id ||
    updated_post_is_local === undefined ||
    updated_post_is_local === null
  ) {
    return false
  }

  if (invoice.subscription) {
    await hasuraServerRequest<
      {
        update_users: { affected_rows: number }
        update_payments: { affected_rows: number }
      },
      {
        stripe_subscription_id: string
        email: string
      }
    >(
      gql`
        mutation M($stripe_subscription_id: String, $email: String) {
          update_payments(
            where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
            _set: { active: false }
          ) {
            affected_rows
          }
        }
      `,
      {
        email: invoice.customer_email!,
        stripe_subscription_id: invoice.subscription as string,
      }
    )

    return true
  }

  return false
}
