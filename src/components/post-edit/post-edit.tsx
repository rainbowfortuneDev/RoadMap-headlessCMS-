import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useState } from 'react'

import Typography from '@mui/material/Typography'
import {
  usePostEdit__UpdatePostWithAttributesMutation,
  usePostEdit__UpdatePostWithoutAttributesMutation,
  usePostEdit__GetPostsubcategoriesQuery,
} from '../../generated/graphql'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import PostForm from '../_shared/post-form/post-form'
import { useUser } from '../../utils/user/user-context'

import usePostFormFeilds from '../_shared/post-form/use-post-form-fields'
import { useSnackbar } from 'notistack'
import type { PostFormProps } from '../_shared/post-form/post-form'
import type { UsePostFormConfig } from '../_shared/post-form/use-post-form-fields'
import { enablePayment } from '../../utils/config'
export type PostEditProps = {
  categories: PostFormProps['categories']
  postInitial: Exclude<UsePostFormConfig['initialValue'], undefined>
}

export default function PostEdit({ categories, postInitial }: PostEditProps) {
  const { enqueueSnackbar } = useSnackbar()
  const { user } = useUser(true)
  const router = useRouter()

  const fields = usePostFormFeilds({ initialValue: postInitial })

  const [{ fetching, stale, error }, updatePostWithAttributes] =
    usePostEdit__UpdatePostWithAttributesMutation()

  const [{ fetching: fetching1, stale: stale1 }, updatePostWithoutAttributes] =
    usePostEdit__UpdatePostWithoutAttributesMutation()

  const [isSentSuccess, setIsSentSuccess] = useState(false)
  const [customError, _] = useState<Error | null>(null)

  const selected_sub_category_id = useRef(fields.sub_category_id)

  // console.log( {attributes: fields.attributes} )

  let post_id = postInitial.id
  const handleSubmit = () => {
    if (!fields.title || !fields.detail) {
      console.error('Missing fields')
      return
    }

    // const possible_value = fields.attributes
    console.log('fields.attributes: ', fields.attributes)
    const possible_value =
      fields.attributes?.length === 0 ? {} : fields.attributes

    if (fields.attributes?.length != 0) {
      try {
        updatePostWithAttributes({
          post_id: postInitial.id,
          sub_category_id: fields.sub_category_id,
          title: fields.title,
          detail: fields.detail,
          price_range: '{' + fields.price_range + '}',
          price_description: fields.price_description,
          post_attachments: fields.attachment_files.map((file) => ({
            post_id: postInitial.id,
            file_id: file.id,
          })),
          years_of_experience: fields.years_of_experience,
          post_attributes: { post_id: postInitial.id, possible_value },
        }).then(({ data }) => {
          if (!post_id) throw new Error('Post ID not found')
          const alt_id = data?.update_posts?.returning[0]?.alt_id

          if (alt_id) {
            enqueueSnackbar('Post was updated!', {
              variant: 'success',
            })

            const title = data?.update_posts?.returning[0]?.title
            if (enablePayment) {
              router.push(`/post/payment/${alt_id}`)
            } else {
              router.push(
                `/post/${title?.toLowerCase().replace(/\s/g, '%20')}/${alt_id}`
              )
            }
            setIsSentSuccess(true)
          } else {
            enqueueSnackbar('Error updating post!', {
              variant: 'error',
            })
          }
        })
      } catch (e) {
        enqueueSnackbar((e as Error)?.message || 'Error updating post!', {
          variant: 'error',
        })
      }
    } else {
      try {
        updatePostWithoutAttributes({
          post_id: postInitial.id,
          sub_category_id: fields.sub_category_id,
          title: fields.title,
          detail: fields.detail,
          price_range: '{' + fields.price_range + '}',
          price_description: fields.price_description,
          post_attachments: fields.attachment_files.map((file) => ({
            post_id: postInitial.id,
            file_id: file.id,
          })),
          years_of_experience: fields.years_of_experience,
        }).then(({ data }) => {
          if (!post_id) throw new Error('Post ID not found')
          const alt_id = data?.update_posts?.returning[0]?.alt_id

          if (alt_id) {
            enqueueSnackbar('Post was updated!', {
              variant: 'success',
            })

            const title = data?.update_posts?.returning[0]?.title
            if (enablePayment) {
              router.push(`/post/payment/${alt_id}`)
            } else {
              router.push(
                `/post/${title?.toLowerCase().replace(/\s/g, '%20')}/${alt_id}`
              )
            }
            setIsSentSuccess(true)
          } else {
            enqueueSnackbar('Error updating post!', {
              variant: 'error',
            })
          }
        })
      } catch (e) {
        enqueueSnackbar((e as Error)?.message || 'Error updating post!', {
          variant: 'error',
        })
      }
    }
  }

  const [{ data: previousPosts }] = usePostEdit__GetPostsubcategoriesQuery({
    variables: {
      user_id: user?.id,
      selected_sub_category_id: selected_sub_category_id.current,
    },
  })
  const subCategorieIds = previousPosts?.get_postsubcategories.map(
    (sc) => sc.sub_category_id
  )

  categories = categories.map((ca) => ({
    ...ca,
    sub_categories: ca.sub_categories.filter(
      (sc) => !subCategorieIds?.includes(sc.id)
    ),
  }))

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
          loading: fetching || stale || fetching1 || stale1 || isSentSuccess,
          error: error ?? null,
          onFinish: handleSubmit,
          fields,
          categories,
        }}
      />

      <Footer />
    </>
  )
}
