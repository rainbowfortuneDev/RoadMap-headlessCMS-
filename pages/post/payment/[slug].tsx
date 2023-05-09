import { gql } from 'graphql-request'
import type { GetServerSidePropsContext } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import PaypalButton from '../../../src/components/post-payment/PaypalButton'
import StripeButton from '../../../src/components/post-payment/StripeButton'
import Footer from '../../../src/components/_shared/footer/footer'
import Header from '../../../src/components/_shared/header/header'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'

import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useEffect, useState } from 'react'
import { usePaymentStyles } from '../../../src/components/post-payment/styles'
import { useUser } from '../../../src/utils/user/user-context'
import {
  useBusinessSizesGqlQuery,
  useCancelPaypalSubscriptionGqlMutation,
  useCancelStripeSubscriptionGqlMutation,
} from '../../../src/generated/graphql'
import { enablePayment } from '../../../src/utils/config'
export default function PostPaymentPage({ post }: Props) {
  const router = useRouter()
  const classes = usePaymentStyles()

  const [loading, setLoading] = useState(false)

  const { user } = useUser()
  const [promotions, setPromotions] = useState<
    {
      name: string
      type: string
      price: number
      selected: boolean
    }[]
  >([])

  const [{ data }] = useBusinessSizesGqlQuery({
    variables: {
      businessSize: user?.business_size,
    },
  })
  const [_, cancelPaypalSub] = useCancelPaypalSubscriptionGqlMutation()
  const [__, cancelStripeSub] = useCancelStripeSubscriptionGqlMutation()

  const isProcessing = post.promotion_status === 8
  const isSubscribed =
    [1, 2, 3].includes(post.promotion_status || 0) &&
    post.payments?.active === true &&
    !!(
      post.payments?.paypal_subscription_id ||
      post.payments?.stripe_subscription_id
    )
  useEffect(() => {
    if (!data?.promotions) return
    setPromotions(
      data?.promotions
        .sort((a, b) => a.price - b.price)
        .map((v, i) => ({
          ...v,
          selected: isSubscribed
            ? (i === 0 && [1, 3].includes(post.promotion_status)) ||
              (i === 1 && post.promotion_status === 2)
            : i === 0,
        }))
    )
  }, [data?.promotions, post.promotion_status, isSubscribed])

  function handleNothanks() {
    router.push(
      `/post/${post.title?.toLowerCase().replace(/\s/g, '%20')}/${post.alt_id}`
    )
  }

  // console.log('slug: ', (post.payments?.stripe_subscription_id))

  async function handleCancelPayment() {
    setLoading(true)

    //console.log('slug: ', (post.payments?.stripe_subscription_id))
    try {
      if (post.payments?.paypal_subscription_id) {
        await cancelPaypalSub({
          post_id: post.id,
          sub_id: post.payments?.paypal_subscription_id,
        })
      } else if (post.payments?.stripe_subscription_id) {
        await cancelStripeSub({
          post_id: post.id,
          sub_id: post.payments?.stripe_subscription_id,
        })
      } else {
        console.log('Invalid subscription')
      }
      router.push(
        `/post/${post.title?.toLowerCase().replace(/\s/g, '%20')}/${
          post.alt_id
        }`
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <NextSeo title="Promote your post" />
      <Header />
      <section className={classes.main}>
        {!promotions.length ? (
          <div className={classes.circularIndicator}>
            <CircularProgress />
          </div>
        ) : (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid className={classes.gridItem} xs={12} sm={8} md={6} lg={4}>
              <Box display="flex">
                <Typography
                  className={classes.paymentTitle}
                  variant="h5"
                  gutterBottom
                  align="center"
                >
                  Boost Your Post!
                  <Typography className={classes.paymentDesc} component="pre">
                    {user?.business_size == 'INDIVIDUAL' || 'LOCAL_BUSINESS'
                      ? 'Sponsor - defaults to highest search ranking. Subscribe - shows  post nationally.'
                      : 'Subscribe - activate national post'}

                    <div
                      style={{
                        display: 'table',
                        margin: '0px auto 0px auto',
                        padding: '8px',
                        color: '#395144',
                      }}
                    >
                      Cancel Anytime!
                    </div>
                  </Typography>
                </Typography>
              </Box>
              {!isProcessing && (
                <>
                  <Box
                    mb={4}
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    {promotions.map((v, i) => (
                      <Typography key={i}>
                        <FormControlLabel
                          value=""
                          label={v.type}
                          control={
                            <Radio
                              color="primary"
                              checked={!isProcessing && v.selected}
                              disabled={isSubscribed || isProcessing}
                              onChange={() =>
                                setPromotions(
                                  promotions.map((p) => ({
                                    ...p,
                                    selected: p.type === v.type,
                                  }))
                                )
                              }
                            />
                          }
                        />{' '}
                        <span style={{ color: 'blue', marginLeft: '-1rem' }}>
                          (${v.price.toFixed(1)})
                        </span>
                      </Typography>
                    ))}
                  </Box>
                  <Typography
                    className={classes.title}
                    variant="h5"
                    gutterBottom
                  >
                    Monthly Selection
                  </Typography>

                  {promotions
                    .filter((v) => v.selected)
                    .map((v, i) => (
                      <Box
                        key={i}
                        mt={2}
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Typography color="textSecondary">
                            {v.name}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography color="textSecondary">
                            ${isProcessing ? '0.00' : v.price.toFixed(2)}
                          </Typography>
                        </Box>
                      </Box>
                    ))}

                  <hr
                    style={{
                      marginTop: '1.5rem',
                      borderTop: ' 1px solid blue',
                    }}
                  />
                  <Box
                    mt={2}
                    mb={4}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Box>
                      {' '}
                      <Typography className={classes.totalPrice}>
                        Total
                      </Typography>
                    </Box>
                    <Box>
                      {' '}
                      <Typography className={classes.totalPrice}>
                        $
                        {promotions
                          .find((v) => v.selected)
                          ?.price?.toFixed(2) ?? '0.00'}
                      </Typography>
                    </Box>
                  </Box>
                </>
              )}

              {isProcessing ? (
                <Button
                  className={classes.cancelButton}
                  variant="contained"
                  fullWidth
                  disabled={true}
                >
                  Processing Payment...
                </Button>
              ) : isSubscribed ? (
                <Button
                  className={classes.cancelButton}
                  variant="contained"
                  onClick={handleCancelPayment}
                >
                  {loading ? (
                    <CircularProgress size={26} color="inherit" />
                  ) : (
                    'cancel'
                  )}
                </Button>
              ) : (
                <div>
                  <StripeButton
                    post_id={post.id}
                    isSponsor={
                      promotions.find((v) => v.selected)?.type === 'Sponsor'
                    }
                  />
                  <PaypalButton
                    post_id={post.id}
                    businessSize={user?.business_size as any}
                    isSponsor={
                      promotions.find((v) => v.selected)?.type === 'Sponsor'
                    }
                    onSuccess={(id) => {
                      router.push(
                        `/post/${post.title
                          ?.toLowerCase()
                          .replace(/\s/g, '%20')}/${post.alt_id}`
                      )
                    }}
                  />
                  <Button
                    variant="contained"
                    className={classes.thanksButton}
                    onClick={() => handleNothanks()}

                    /* onClick={() => router.push(`/post/${post.title?.toLowerCase().replace(/\s/g, '%20')}/${post.alt_id}`   } */
                  >
                    {loading ? (
                      <CircularProgress size={26} color="inherit" />
                    ) : (
                      'No Thanks'
                    )}
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        )}
      </section>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const alt_id = ctx.params?.slug as string
  if (!alt_id || !enablePayment) return { notFound: true }

  let data: any = await hasuraServerRequest(
    gql`
      query PostPaymentQuery($alt_id: bpchar!) {
        posts(where: { alt_id: { _eq: $alt_id } }) {
          id
          alt_id
          title
          detail
          promotion_status
          payments(limit: 1, order_by: { id: desc }) {
            paypal_subscription_id
            stripe_subscription_id
            active
          }
        }
      }
    `,
    { alt_id }
  )

  let post = data?.posts?.[0]
  if (!post) return { notFound: true }
  return {
    props: {
      post: {
        ...post,
        payments: post.payments?.length && post.payments?.[0],
      },
    },
  }
}

type Props = {
  post: {
    id: number
    alt_id: string
    title: string
    detail: string
    promotion_status: number
    payments?: {
      paypal_subscription_id: string
      stripe_subscription_id: string
      active: boolean
    }
  }
}
