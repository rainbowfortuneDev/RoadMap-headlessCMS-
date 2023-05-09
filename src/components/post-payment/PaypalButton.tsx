import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useUser } from '../../utils/user/user-context'

import {
  NEXT_PUBLIC_PAYPAL_SPONSORSHIP_INDIVIDUAL,
  NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_INDIVIDUAL,
  NEXT_PUBLIC_PAYPAL_SPONSORSHIP_BUSINESS,
  NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_BUSINESS,
  NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_NATIONAL_BUSINESS,
} from '../../utils/config'

type Props = {
  post_id?: number
  businessSize?: 'INDIVIDUAL' | 'LOCAL_BUSINESS' | 'NATIONAL_BUSINESS'
  isSponsor: boolean
  onSuccess?: (subID: string) => void
  onError?: (e: any) => void
}

export default function PaypalButton({
  post_id,
  businessSize,
  isSponsor,
  onSuccess,
  onError,
}: Props) {
  const { user } = useUser()
  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <PayPalScriptProvider
        options={{
          'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
          vault: true,
          intent: 'subscription',
          components: 'buttons,marks,funding-eligibility',
        }}
      >
        <PayPalButtons
          forceReRender={[businessSize, isSponsor]}
          style={{
            shape: 'pill',
            color: 'white',
            layout: 'horizontal',
            label: 'subscribe',
          }}
          createSubscription={async (_, actions) => {
            let plan_id = ''
            if (businessSize === 'INDIVIDUAL') {
              plan_id = isSponsor
                ? NEXT_PUBLIC_PAYPAL_SPONSORSHIP_INDIVIDUAL!
                : NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_INDIVIDUAL!
            } else if (businessSize === 'LOCAL_BUSINESS') {
              plan_id = isSponsor
                ? NEXT_PUBLIC_PAYPAL_SPONSORSHIP_BUSINESS!
                : NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_BUSINESS!
            } else {
              plan_id = NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_NATIONAL_BUSINESS!
            }

            return actions.subscription.create({
              plan_id,
              custom_id: post_id + '',
              subscriber: {
                payer_id: user?.id,
                email_address: user?.email,
              },
            })
          }}
          onApprove={async (data, actions) => {
            actions.subscription?.activate()
            fetch('/api/paypal/process_payment', {
              method: 'POST',
              body: JSON.stringify({
                post_id,
              }),
            })
            onSuccess && onSuccess(data.subscriptionID || '')
          }}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  )
}
