import { gql } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import type { PostsProps } from '../../src/components/posts/posts'
import Posts from '../../src/components/posts/posts'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'
import { filterTreeSB } from '../../src/utils/processDuplicates/helpers'

function PostsPage(props: PostsProps) {
  return (
    <div className="page_container">
      <NextSeo
        title="Search service posts"
        description={`Discover for service posts by skilled professionals in categories${
          props.q ? ` matching the term "${props.q}"` : ''
        }.`}
      />
      <Posts {...props} />
    </div>
  )
}

export default PostsPage

type PostsParams = {
  slugs: string[]
}

export const getStaticPaths: GetStaticPaths<PostsParams> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PostsProps, PostsParams> = async ({
  params,
}) => {
  const [_city_name, city_alt_id, lat, longitude, searchText, page] =
    params?.slugs ?? []

  const pageCount = Number(page)

  if (!city_alt_id) {
    return { notFound: true }
  }

  const {
    post_list_aggregate: {
      aggregate: { count },
    },
    result_posts,
  } = await hasuraServerRequest<
    {
      result_posts: PostsProps['result_posts']
      post_list_aggregate: any
    },
    {
      q_ilike?: string
      alt_city_id?: string
      lat: string
      longitude: string
      offset?: number
    }
  >(
    gql`
      query Search_Posts(
        $q_ilike: String! = ""
        $alt_city_id: String! = city_alt_id
        $offset: Int = 0
        $lat: numeric = lat
        $longitude: numeric = longitude
      ) {
        post_list_aggregate: post_list_aggregate(
          args: {
            search_text: $q_ilike
            alt_city_id: $alt_city_id
            lat: $lat
            long: $longitude
          }
        ) {
          aggregate {
            count
          }
        }
        result_posts: post_list(
          offset: $offset
          limit: 24
          args: {
            search_text: $q_ilike
            alt_city_id: $alt_city_id
            lat: $lat
            long: $longitude
          }
        ) {
          category_name
          sub_category_name
          post_id
          alt_id
          category_id
          sub_category_id
          tags
          detail
          promotion_status
          price_range
          price_description
          title
          user {
            id
            alt_id
            email
            full_name
            business_name
            is_privacy_enabled
            business_size
            zip_code {
              city {
                id
                alt_id
                name
                state_code
              }
            }
            avatar {
              url
              post_attachments {
                id
                file {
                  url
                  name
                  type
                }
              }
            }
          }
        }
      }
    `,
    {
      q_ilike: searchText,
      alt_city_id: city_alt_id,
      lat,
      longitude,
      offset: 24 * (pageCount - 1),
    }
  )

  // console.log(result_posts.slice(0,5))
  let categoryDetails = filterTreeSB(result_posts)

  // console.log(categoryDetails)

  return {
    props: {
      city_alt_id,
      lat,
      longitude,
      q: searchText,
      page: pageCount,

      result_posts_count: count,
      result_posts,
      categoryDetails,
      setFilterText: null,
    },
    revalidate: 60 * 60,
  }
}
