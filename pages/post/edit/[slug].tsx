import { gql } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import type { PostEditProps } from '../../../src/components/post-edit/post-edit'
import PostEdit from '../../../src/components/post-edit/post-edit'
import type {
  Categories as CategoryType,
  Files as FileType,
  // Possible_Values as PossibleValueType,
  Posts as PostType,
  // Post_Attributes as PostAttributeType,
  // Post_Prices as PostPriceType,
  Sub_Categories as SubCategoryType,
} from '../../../src/generated/graphql'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'

// import { CropDinSharp } from '@material-ui/icons'

function PostEditPage(props: PostEditProps) {
  return (
    <>
      <NextSeo title="Update your post" />

      <PostEdit {...props} />
    </>
  )
}

export default PostEditPage

type PostEditParams = { slug: string }

export const getStaticPaths: GetStaticPaths<PostEditParams> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PostEditProps, PostEditParams> =
  async ({ params }) => {
    // console.log({ params })
    const alt_id = params?.slug

    if (!alt_id) {
      return { notFound: true }
    }

    let { categories, posts } = await hasuraServerRequest<
      {
        categories: PostEditProps['categories']
        posts: (Pick<
          PostType,
          | 'id'
          | 'alt_id'
          | 'title'
          | 'detail'
          | 'price_range'
          | 'price_description'
          | 'years_of_experience'
        > & {
          sub_category: Pick<SubCategoryType, 'id'> & {
            category: Pick<CategoryType, 'id'>
          }
          post_attachments: (Pick<FileType, 'id'> & {
            file: Pick<FileType, 'id' | 'url' | 'name'>
          })[]
          // post_prices: Pick<PostPriceType, 'id' | 'price' | 'detail'>[]
          post_attribute: any
        })[]
      },
      { alt_id: string }
    >(
      gql`
        query PostEdit_StaticProps($alt_id: bpchar!) {
          categories {
            id
            name
            sub_categories {
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
                  values
                }
              }
            }
          }

          posts: posts(where: { alt_id: { _eq: $alt_id } }) {
            id
            alt_id
            sub_category {
              id
              category {
                id
              }
            }

            title
            detail
            price_range
            price_description
            post_attachments {
              id
              file {
                id
                url
                name
              }
            }
            years_of_experience
            post_attribute {
              possible_value
            }
          }
        }
      `,
      { alt_id }
    )

    let post = posts?.[0]
    if (!post) {
      return { notFound: true }
    }

    // console.log({ posts })

    return {
      props: {
        categories,
        postInitial: {
          id: post.id,

          // FORM - General:
          sub_category_id: post.sub_category.id,
          category_id: post.sub_category.category.id,

          // FORM - Title:
          title: post.title,
          detail: post.detail,
          attachment_files: post.post_attachments.map(
            (attachment) => attachment.file
          ),

          // FORM - Price:
          price_range: post?.price_range,
          price_description: post?.price_description,
          years_of_experience: post.years_of_experience,

          // FORM - <attributes>
          attributes: post?.post_attribute?.possible_value ?? null,
        },
      },
    }
  }
