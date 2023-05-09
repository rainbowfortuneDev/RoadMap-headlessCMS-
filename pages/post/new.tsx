import { gql } from 'graphql-request'
import type { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import type { PostNewProps } from '../../src/components/post-new/post-new'
import PostNew from '../../src/components/post-new/post-new'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

function PostNewPage(props: PostNewProps) {
  return (
    <>
      <NextSeo title="Create a new post" />

      <PostNew {...props} />
    </>
  )
}

export default PostNewPage

export const getStaticProps: GetStaticProps<PostNewProps> = async () => {
  const { categories } = await hasuraServerRequest<{
    categories: PostNewProps['categories']
  }>(
    gql`
      query PostNew_StaticProps {
        categories(order_by: { order: asc }) {
          id
          name
          sub_categories(order_by: { name: asc }) {
            id
            name
            max_post_images
            properties {
              id
              name
              display_name
              order
              is_mandatory
              possible_values {
                id
                values
              }
            }
          }
        }
      }
    `
  )

  return {
    props: {
      categories,
    },
    revalidate: 60 * 60,
  }
}
