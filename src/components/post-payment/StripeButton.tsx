import Button from '@mui/material/Button'
import React from 'react'
import { usePostEdit__GetStripeCustomerPortalLinkMutation } from '../../generated/graphql'

type Props = {
  post_id?: number
  isSponsor: boolean
  onSuccess?: () => void
  onError?: (e: any) => void
}

export default function StripeButton({
  post_id,
  isSponsor,
  onSuccess,
  onError,
}: Props) {
  const [_, getStripeCustomerPortalLink] =
    usePostEdit__GetStripeCustomerPortalLinkMutation()
  return (
    <Button
      variant="contained"
      style={{
        width: '90%',
        borderRadius: 99,
        boxShadow: ' 0px 2px 1px #ddd,0px -2px 1px #dddd',
        margin: '10px 0 2rem 0',
        padding: '0',
        backgroundColor: '#fff',
      }}
      onClick={() => {
        getStripeCustomerPortalLink({
          post_id,
          updated_post_is_local: isSponsor,
        })
          .then(({ error, data }) => {
            if (error) throw error
            const url = data?.checkout_or_manage_post_payment.url
            if (url) window.location.href = url
            onSuccess && onSuccess()
          })
          .catch((e) => onError && onError(e))
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        style={{
          width: '3rem',
        }}
        src="/visa.svg"
        alt="visa"
      />
    </Button>
  )
}
