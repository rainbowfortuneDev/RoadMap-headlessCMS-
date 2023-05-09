import { gql } from 'graphql-request'
import type { GetServerSidePropsContext } from 'next'
import { NextSeo } from 'next-seo'
import type { SellerDetailProps } from '../../src/components/seller-detail/seller-detail'
import SellerDetail from '../../src/components/seller-detail/seller-detail'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

function SellerDetailPage(props: SellerDetailProps) {
  return (
    <div className="page_container">
      <NextSeo title={`${props.user.full_name} — Seller`} />

      <SellerDetail {...props} />
    </div>
  )
}

export default SellerDetailPage

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  if (!params?.seller_id) {
    return { notFound: true }
  }
  const seller_id = params.seller_id as string

  const { users, posts } = await hasuraServerRequest<
    {
      users: SellerDetailProps['user'][]

      posts: SellerDetailProps['posts']
    },
    { seller_id: string }
  >(
    gql`
      query SellerDetail_StaticProps($seller_id: bpchar!) {
        users: users(where: { alt_id: { _eq: $seller_id } }) {
          id
          alt_id
          email
          public_contact_address
          public_phone
          is_privacy_enabled
          avatar {
            url
          }
          full_name
          business_name
          business_size
          zip_code {
            city {
              name
              state_code
            }
          }
        }

        posts(where: { _and: { user: { alt_id: { _eq: $seller_id } } } }) {
          id
          alt_id
          title
          detail
          promotion_status
          price_range
          price_description
          user {
            id
            alt_id
            public_contact_address
            zip_code {
              city {
                id
                alt_id
                name
                state_code
              }
            }
            email
            public_phone
            is_privacy_enabled
            business_size
            avatar {
              url
            }
            full_name
            business_name
          }

          post_attribute {
            possible_value
          }

          sub_category {
            id
            name
            category {
              id
              name
            }
          }
          payments(limit: 1, order_by: { last_payment: desc }) {
            paypal_subscription_id
            stripe_subscription_id
          }
        }
      }
    `,
    { seller_id }
  )

  const user = users?.[0]
  if (!user) {
    return { notFound: true }
  }

  return {
    props: {
      user,
      posts,
    },
  }
}
