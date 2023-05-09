import { useState } from 'react'

import type {
  Files as FileType,
  Possible_Values as PossibleValueType,
  Posts as PostType,
  Post_Attributes as PostAttributeType,
} from '../../../generated/graphql'

import { DEFAULT_PRICE_RANGE } from '../../../utils/config'

const NEXT_PUBLIC_POST_DEFAULT_PRICE_RANGE: string[] = DEFAULT_PRICE_RANGE
  ? DEFAULT_PRICE_RANGE.split(',')
  : []

const firstPrice: number = parseInt(
  NEXT_PUBLIC_POST_DEFAULT_PRICE_RANGE &&
    NEXT_PUBLIC_POST_DEFAULT_PRICE_RANGE[0],
  10
)
const secondPrice: number = parseInt(
  NEXT_PUBLIC_POST_DEFAULT_PRICE_RANGE &&
    NEXT_PUBLIC_POST_DEFAULT_PRICE_RANGE[1],
  10
)
const POST_DEFAULT_PRICE_RANGE: number[] = [firstPrice, secondPrice]

export type UsePostFormConfig = {
  initialValue?: {
    id: number
    // alt_id: string

    // FORM - General:
    category_id: number
    sub_category_id: PostType['sub_category_id']

    // FORM - Title & Description:

    title: PostType['title']
    detail: PostType['detail']

    attachment_files: Pick<FileType, 'id' | 'url' | 'name'>[]

    // FORM - Pricing:

    price_range: PostType['price_range']
    price_description: PostType['price_description']

    years_of_experience?: PostType['years_of_experience']

    // FORM - <attributes>

    attributes: (Pick<PostAttributeType, 'post_id'> & {
      property_id: PossibleValueType['property_id']
    })[]
  }
}

function usePostFormFeilds({ initialValue }: UsePostFormConfig = {}) {
  // console.log({ initialValue })
  // FORM - General:
  const [category_id, setCategoryId] = useState<number | null>(
    initialValue?.category_id ?? null
  )
  const [sub_category_id, setSubCategoryId] = useState<
    PostType['sub_category_id'] | null
  >(initialValue?.sub_category_id ?? null)

  // FORM - Title & Description:
  const [title, setTitle] = useState<PostType['title'] | null>(
    initialValue?.title ?? null
  )
  const [detail, setDetail] = useState<PostType['detail'] | any>(
    initialValue?.detail ?? null
  )

  const [attachment_files, setAttachmentFiles] = useState<
    Pick<FileType, 'id' | 'url' | 'name'>[]
  >(initialValue?.attachment_files ?? [])

  // const [price_range, setPriceRange] = useState<number[]>([20, 37])
  const [price_range, setPriceRange] = useState<PostType['price_range'] | null>(
    initialValue?.price_range ?? POST_DEFAULT_PRICE_RANGE
  )

  const [years_of_experience, setYearsOfExperience] = useState<
    PostType['years_of_experience'] | null
  >(initialValue?.years_of_experience ?? '0')

  // const [PriceDescription , setPriceDescription] = useState('')
  const [price_description, setPriceDescription] = useState<
    PostType['price_description'] | null
  >(initialValue?.price_description ?? null)

  // FORM - <attributes>
  const [attributes, setAttributes] = useState<any[]>(
    initialValue?.attributes ?? []
  )

  const handlePriceChange = (event: any, newprice_range: number | number[]) => {
    // console.log({ newprice_range })
    setPriceRange(newprice_range as number[])
  }

  return {
    // FORM - General:

    category_id,
    setCategoryId,

    sub_category_id,
    setSubCategoryId,

    // FORM - Title & Description:

    title,
    setTitle,

    detail,
    setDetail,

    attachment_files,
    setAttachmentFiles,

    // FORM - Pricing:

    price_range,
    handlePriceChange,
    setPriceRange,

    price_description,
    setPriceDescription,

    years_of_experience,
    setYearsOfExperience,

    // FORM - <attributes>

    attributes,
    setAttributes,
  }
}

export default usePostFormFeilds
