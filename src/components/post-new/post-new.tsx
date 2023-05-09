import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

import Typography from '@mui/material/Typography'

import {
  usePostNew__InsertPostMutation,
  usePostNew__InsertPostAttributeMutation,
  usePostNew__PreviousPostsQuery,
  usePostNew__PreviousPostsCountQuery,
} from '../../generated/graphql'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import PostForm from '../_shared/post-form/post-form'
import usePostFormFeilds from '../_shared/post-form/use-post-form-fields'
import type { PostFormProps } from '../_shared/post-form/post-form'
import { enablePayment } from '../../utils/config'
import { useSnackbar } from 'notistack'

export type PostNewProps = {
  categories: PostFormProps['categories']
  // property_screens: PostFormProps['property_screens']
}

function PostNew({ categories }: PostNewProps) {
  // Let JText be ToString(text)
  const { user } = useUser(true)

  const router = useRouter()
  //async added here (by hicham)
  const { enqueueSnackbar } = useSnackbar()

  const fields = usePostFormFeilds()

  const [{ fetching, stale, error }, insertPost] =
    usePostNew__InsertPostMutation()

  const [
    { fetching: fetching1, stale: stale1, error: error1 },
    insertPostAttribute,
  ] = usePostNew__InsertPostAttributeMutation()

  const [isSentSuccess, setIsSentSuccess] = useState(false)
  const [customError, _] = useState<Error | null>(null)

  const handleSubmit = () => {
    if (!fields.title || !fields.detail) {
      console.error('Missing fields')
      return
    }

    const promotion_status =
      user?.business_size === 'NATIONAL_BUSINESS' ? 10 : 4

    const possible_value =
      fields.attributes?.length === 0 ? {} : fields.attributes

    if (fields.attributes?.length === 0) {
      //add try here
      try {
        insertPost({
          sub_category_id: fields.sub_category_id,
          title: fields.title,
          detail: fields.detail,
          price_range: '{' + fields.price_range + '}',
          price_description: fields.price_description,
          years_of_experience: fields.years_of_experience,
          promotion_status: promotion_status,
          post_attachments: fields.attachment_files.map((file) => ({
            file_id: file.id,
          })),
        }).then(async ({ data }) => {
          const post_id = data?.insert_posts?.returning[0]?.id
          // if (!post_id) throw new Error('New post ID not found')
          if (post_id) {
            const alt_id = data?.insert_posts?.returning[0]?.alt_id
            enqueueSnackbar('Post was added!', {
              variant: 'success',
            })

            const title = data?.insert_posts?.returning[0]?.title
            if (enablePayment) {
              router.push(`/post/payment/${alt_id}`)
            } else {
              router.push(
                `/post/${title?.toLowerCase().replace(/\s/g, '%20')}/${alt_id}`
              )
            }
            setIsSentSuccess(true)
          } else {
            enqueueSnackbar('Error adding post!', {
              variant: 'error',
            })
          }
        })
      } catch (err) {
        enqueueSnackbar('There was an Error while Posting', {
          variant: 'error',
        })
      }
    } else {
      try {
        insertPostAttribute({
          sub_category_id: fields.sub_category_id,
          title: fields.title,
          detail: fields.detail,
          price_range: '{' + fields.price_range + '}',
          price_description: fields.price_description,
          years_of_experience: fields.years_of_experience,
          promotion_status: promotion_status,
          post_attachments: fields.attachment_files.map((file) => ({
            file_id: file.id,
          })),
          post_attribute: { possible_value },
        }).then(async ({ data }) => {
          const post_id = data?.insert_posts?.returning[0]?.id
          // if (!post_id) throw new Error('New post ID not found')
          if (post_id) {
            const alt_id = data?.insert_posts?.returning[0]?.alt_id

            enqueueSnackbar('Post was added!', {
              variant: 'success',
            })

            const title = data?.insert_posts?.returning[0]?.title
            if (enablePayment) {
              router.push(`/post/payment/${alt_id}`)
            } else {
              router.push(
                `/post/${title?.toLowerCase().replace(/\s/g, '%20')}/${alt_id}`
              )
            }
            setIsSentSuccess(true)
          } else {
            enqueueSnackbar('Error adding post!', {
              variant: 'error',
            })
          }
        })
      } catch (err) {
        enqueueSnackbar((err as Error)?.message || 'Error adding post!', {
          variant: 'error',
        })
      }
    }
  }

  // added 1-18-22 - sub_category filter

  const [{ data: previousPostsCount }] = usePostNew__PreviousPostsCountQuery({
    variables: { user_id: user?.id },
  })
  const limitReached = useMemo(
    () => !!((previousPostsCount?.posts_aggregate.aggregate?.count || 0) >= 3),
    [previousPostsCount?.posts_aggregate.aggregate?.count]
  )

  const [{ data: previousPosts }] = usePostNew__PreviousPostsQuery({
    variables: { user_id: user?.id },
  })
  const subCategorieIds = previousPosts?.posts.map((sc) => sc.sub_category_id)
  categories = categories.map((ca) => ({
    ...ca,
    sub_categories: ca.sub_categories.filter(
      (sc) => !subCategorieIds?.includes(sc.id)
    ),
  }))
  // end

  return (
    <>
      <Header />
      {!customError?.message ? null : (
        <Typography
          variant="body2"
          color="error"
          component="div"
          align="center"
          style={{ padding: 24 }}
        >
          {customError.message}
        </Typography>
      )}

      <PostForm
        {...{
          loading:
            fetching ||
            stale ||
            isSentSuccess ||
            limitReached ||
            fetching1 ||
            stale1,
          error: limitReached
            ? new Error('Sorry, you can have only a maximum of 3 posts.')
            : error ?? error1 ?? null,
          onFinish: limitReached ? () => {} : () => handleSubmit(),
          fields,
          categories,
        }}
      />

      <Footer />
    </>
  )
}

export default PostNew
