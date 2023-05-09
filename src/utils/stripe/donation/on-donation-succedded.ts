import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

import type { Donations_Insert_Input } from '../../../generated/graphql'

import { STRIPE_PRODUCT_DONATION } from '../../../utils/config'

export async function onDonateSuccedded(session: Stripe.Checkout.Session) {
  const items = session.line_items?.data.filter(
    (item) => item.price?.product === STRIPE_PRODUCT_DONATION
  )
  if (!items?.length) {
    return false
  }

  await hasuraServerRequest<
    { insert_donations: { affected_rows: number } },
    { objects: Donations_Insert_Input[] }
  >(
    gql`
      mutation OnDonationSuccedded($objects: [donations_insert_input!]!) {
        insert_donations(objects: $objects) {
          affected_rows
        }
      }
    `,
    {
      objects: items.map(() => ({
        stripe_checkout_session_id: session.id,
        email: session.customer_email,
        amount: (session.amount_total ?? 0) / 100,
      })),
    }
  )

  return true
}
