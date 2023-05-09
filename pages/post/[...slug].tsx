import { gql } from 'graphql-request'
import type { GetServerSidePropsContext } from 'next'
import { NextSeo } from 'next-seo'
import type { PostDetailProps } from '../../src/components/post-detail/post-detail'
import PostDetail from '../../src/components/post-detail/post-detail'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

export default function PostDetailPage(props: PostDetailProps) {
  return (
    <>
      <NextSeo title={props.post.title} description={props.post.detail} />
      <PostDetail {...props} />
    </>
  )
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const [, alt_id] = (params?.slug as string[]) || []
  if (!alt_id) return { notFound: true }

  const { post } = await hasuraServerRequest<
    { post: PostDetailProps['post'][] },
    { alt_id: string }
  >(
    gql`
      query PostDetail_StaticProps($alt_id: bpchar!) {
        post: posts(where: { alt_id: { _eq: $alt_id } }) {
          id
          alt_id
          promotion_status
          posted_by
          title
          years_of_experience
          detail
          price_range
          price_description
          payments(limit: 1, order_by: { last_payment: desc }) {
            paypal_subscription_id
            stripe_subscription_id
          }
          user {
            id
            alt_id
            is_privacy_enabled
            zip_code {
              city {
                id
                alt_id
                name
                state_code
              }
            }
            email
            public_contact_address
            public_phone
            last_seen
            avatar {
              url
            }
            full_name
            business_name
          }
          post_attachments {
            id
            file {
              url
              name
              type
            }
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
              sub_categories {
                id
                name
              }
            }
          }
        }
      }
    `,
    { alt_id }
  )

  if (!post.length) return { notFound: true }

  return {
    props: {
      post: post[0],
    },
  }
}
