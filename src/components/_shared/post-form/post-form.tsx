import StepLabel from '@mui/material/StepLabel'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import StepConnector from '@mui/material/StepConnector'
import Stepper from '@mui/material/Stepper'

import CircularProgress from '@mui/material/CircularProgress'
import FormControl from '@mui/material/FormControl'
import Step from '@mui/material/Step'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { makeStyles, withStyles } from '@mui/styles'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Check from '@mui/icons-material/Check'
import clsx from 'clsx'
import { DropzoneDialog } from 'react-mui-dropzone'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
// import { useRouter } from 'next/router'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useMemo, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import type {
  Categories as CategoryType,
  Possible_Values as PossibleValueType,
  Properties as PropertyType,
  // Property_Screens as PropertyScreenType,
  Sub_Categories as SubCategoryType,
} from '../../../generated/graphql'

import { useRef } from 'react'
import CategoryFinder from '../../category-finder/category-finder'

import { useCity } from '../../../utils/city/city-context'
import { upload } from '../../../utils/object-storage/upload'
import useMobileView from '../../../utils/use-mobile-view/use-mobile-view'
import useSearchParams from '../../../utils/use-search-params/use-search-params'
import { useUser } from '../../../utils/user/user-context'
import FormCard from '../form-card/form-card'
import InputElements, { InputElementsType } from './InputElements'
import styles from './post-form.module.scss'
import usePostFormFeilds from './use-post-form-fields'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import {
  FILE_UPLOAD_SIZE,
  POST_TITLE_CHARACTER_LIMIT,
  POST_DESC_CHARACTER_LIMIT,
  POST_TITLE_MIN_CHARACTER_LIMIT,
  POST_DESC_MIN_CHARACTER_LIMIT,
  PRICING_DESC_CHARACTER_LIMIT,
} from '../../../utils/config'
import findSelectedCategoryId from '../../../utils/categories/findSelectedCategoryId'
import { Search, X } from 'react-feather'

const sizeInMB = FILE_UPLOAD_SIZE * 1024 * 1024

// siamparvez44
// const emptyProperties: any = ''

/* const NEXT_PUBLIC_MAX_UPLOADED_FILES: string = process.env[
 *  'NEXT_PUBLIC_MAX_UPLOADED_FILES'
 *]
 *  ? process.env['NEXT_PUBLIC_MAX_UPLOADED_FILES']
 *  : ''
 *const MAX_UPLOADED_FILES: number =
 *  parseInt(NEXT_PUBLIC_MAX_UPLOADED_FILES, 10) - 1 */

const NEXT_PUBLIC_MAX_UPLOADED_FILES: string = '3' ? '3' : ''
const MAX_UPLOADED_FILES: number =
  parseInt(NEXT_PUBLIC_MAX_UPLOADED_FILES, 10) - 1

// const NEXT_PUBLIC_ATTACHMENT_FILE_SIZE: string = '5242880' ? '5242880' : ''

//const ATTACHMENT_FILE_SIZE: number = parseInt(
//  NEXT_PUBLIC_ATTACHMENT_FILE_SIZE,
//  10
//)

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 12,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
    '@media (max-width: 720px)': {
      top: 12,
    },
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#0844CC',
    },
  },
  line: {
    borderColor: '#707070',
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector)

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: 'white',
    backgroundColor: '#FFA200',
    fontSize: 15,
    width: 30,
    height: 30,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#D4D4D4',
    //zIndex: 1,
    fontSize: 15,
    width: 30,
    height: 30,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  completed: {
    backgroundColor: '#0844CC',
    //zIndex: 1,
    fontSize: 15,
    width: 30,
    height: 30,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function price_rangetext(price_range: number) {
  // console.log(price_range)
  return `${price_range}`
}

// const handlePriceChange = (event: Event, newprice_range: number | number[]) => {
//   setPriceRange(newprice_range as number[])
// }

function QontoStepIcon(props: any) {
  const classes = useQontoStepIconStyles()
  const { active, completed, icon } = props
  //console.log(props)

  return (
    <div className={classes.root}>
      {completed ? (
        <div className={classes.completed}>
          <Check />
        </div>
      ) : active ? (
        <div className={classes.active}>{icon}</div>
      ) : (
        <div className={classes.circle}>{icon}</div>
      )}
    </div>
  )
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  saveButton: {
    backgroundColor: '#0844CC',
    borderRadius: 17,
    width: '30%',
    padding: '20px 30px',
    margin: '0 auto',
    marginTop: '20px',
    '@media (max-width: 840px)': {
      width: '75%',
    },
  },
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      background: 'rgba(8, 68, 294, 0.07)',
      borderColor: 'rgba(8, 68, 294, 0.07)',
      borderRadius: 18,
    },
  },
  centerText: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  uploadBtn: {
    border: '2.5px dashed #48d3f8 ',
    padding: '60px 0',
    '& .MuiButton-label': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      '& .MuiButton-startIcon': {
        margin: 0,
        background: 'rgba(8, 68, 204, 0.15)',
        padding: 10,
        borderRadius: '50%',
        marginBottom: 10,
      },
    },
    '&:hover': {
      border: '2.5px dashed #2d60ff',
      color: 'red',
    },
  },
  additionalBtn: {
    '& .MuiButton-label': {
      '& .MuiButton-startIcon': {
        margin: 0,
        background: 'rgba(8, 68, 204, 0.15)',
        padding: 10,
        borderRadius: '50%',
        marginRight: 10,
      },
    },
  },
}))

export type PostFormProps = {
  loading: boolean
  error: Error | null
  onFinish: () => void | Promise<void>

  fields: ReturnType<typeof usePostFormFeilds>

  categories: (Pick<CategoryType, 'id' | 'name'> & {
    sub_categories: (Pick<
      SubCategoryType,
      'id' | 'name' | 'max_post_images'
    > & {
      properties: (Pick<
        PropertyType,
        'id' | 'display_name' | 'order' | 'is_mandatory'
      > & { possible_values: Pick<PossibleValueType, 'id'>[] })[]
    })[]
  })[]
  // property_screens: Pick<PropertyScreenType, 'id' | 'display_name' | 'order'>[]
}

// function StepIcon({ active, completed }: StepIconProps) {
//   return (
//     <CheckCircleIcon
//       color={completed ? 'primary' : active ? 'secondary' : 'disabled'}
//     />
//   )
// }

function FormButton({
  disabled,
  setActiveStep,
  stepsCount,
  onFinish,
}: {
  disabled: boolean
  setActiveStep: Dispatch<SetStateAction<number>>
  stepsCount: number
  onFinish: () => void | Promise<void>
}) {
  const classes = useStyles()
  // const router = useRouter()
  // const { user } = useUser(true)

  return (
    <>
      <span />
      {/* siamparvez44 */}
      <Button
        variant="contained"
        size="large"
        color="primary"
        disabled={disabled}
        onClick={() =>
          setActiveStep((prev) => {
            if (prev + 1 < stepsCount) {
              return prev + 1
            } else {
              onFinish()
              // router.push(`/seller/${user?.alt_id}`)
              return prev
            }
          })
        }
        className={classes.saveButton}
      >
        Continue
      </Button>
    </>
  )
}

function PostForm({
  loading,
  error,
  onFinish: _onFinish,
  fields,
  categories,
}: PostFormProps) {
  // console.log({ postFields: fields })
  const classes = useStyles()
  const { user, auth } = useUser(true)
  const { zipAndCity } = useCity()
  const query = useSearchParams()
  const onboarding = query.get('onboarding') === '1'

  // controls if the category finder modal is open
  const [modalOpen, setModalOpen] = useState(false)

  const makingscreens = () => {
    const selectedCategory = categories.find((c) => c.id === fields.category_id)

    const selectedSubCategory = selectedCategory?.sub_categories.find(
      (c) => c.id === fields.sub_category_id
    )

    const properties = selectedSubCategory?.properties
    if (!properties) return null
    const data = properties.sort((a: any, b: any) =>
      a.order < b.order ? -1 : a.order > b.order ? 1 : 0
    )
    return data
  }

  const [formstatus, setformstatus] = useState<any>(fields.attributes)

  const handleChange = (
    value: any,
    key: string,
    parent: string,
    children?: string
  ) => {
    let obj = {
      ...formstatus,
    }
    if (!value) {
      delete obj[parent][key]
      if (children) {
        delete obj[parent][children]
      }
    } else {
      let child = formstatus[parent] ?? {}
      child = {
        ...child,
        [key]: value,
      }
      obj[parent] = child
    }
    const { length } = Object.keys(obj[parent])

    if (length === 0) {
      delete obj[parent]
    }

    // console.log('obj: ', obj)
    setformstatus(obj)
    setAttributes(obj)
  }

  const steps = useMemo<{ label: string; data: any }[]>(() => {
    const data = makingscreens()
    // console.log({ data })
    const ret = [
      { label: 'Category', data: '' },
      { label: 'Sub Category', data: '' },
      { label: 'Title & Description', data: '' },
      { label: 'Pricing', data: '' },
    ]
    if (data?.length)
      ret.push({
        label: 'Tags',
        //@ts-ignore
        data,
      })
    return ret
  }, [makingscreens]) // eslint-disable-line react-hooks/exhaustive-deps

  const [activeStep, setActiveStep] = useState(0)

  const wide = useMobileView({ inverse: true, threshold: 'md' })
  const narrow = useMobileView({ threshold: 'md' })

  const {
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
    // setPriceRange,
    handlePriceChange,

    // PriceDescription,
    price_description,
    setPriceDescription,
    years_of_experience,
    setYearsOfExperience,

    // FORM - <attributes>

    attributes,
    setAttributes,
  } = fields

  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<Error | null>(null)

  const handleUpload = useCallback(
    (files: File[]) => {
      const token = auth.idToken?.token
      if (!files.length || !token) {
        return
      }

      setUploading(true)
      setUploadError(null)

      Promise.all(files.map((file) => upload(file, token)))
        .then((uploadedFiles) => {
          setAttachmentFiles((prev) => [
            ...prev,
            ...uploadedFiles.map(({ file }) => ({
              id: file?.id,
              url: file?.url,
              name: file?.name,
            })),
          ])
        })
        .catch((e) => setUploadError(new Error('Failed to upload')))
        .finally(() => setUploading(false))
    },
    [auth.idToken?.token, setAttachmentFiles]
  )

  const retrieveSelectedCategory = (selectedCategory) => {
    // console.log(categories)
    if (selectedCategory.hasOwnProperty('Category')) {
      let categoryId = findSelectedCategoryId(
        selectedCategory.Category,
        categories
      )
      setCategoryId(categoryId)
    }
    if (selectedCategory.hasOwnProperty('SubCategory')) {
      let categoryId = findSelectedCategoryId(
        selectedCategory.Category,
        categories
      )
      let subCategoryId = findSelectedCategoryId(
        selectedCategory.SubCategory,
        categories
      )
      setCategoryId(categoryId)
      setSubCategoryId(subCategoryId)
    }
    if (selectedCategory.hasOwnProperty('Property')) {
      console.log('YES Tag EXISTS')
    }
  }

  const selected_sub_category_id = useRef(fields.sub_category_id)

  /*const findRetrievedItemId = (selectedCategory: string, categories: any) => {
    for (const [key, value] of Object.entries(categories)) {
      let firstVal: any = value
      if(selectedCategory === firstVal.name){
        return firstVal.id
      }
      for (const [key2, value2] of Object.entries(firstVal.sub_categories)) {
        let secondVal: any = value2
        if(selectedCategory === secondVal.name){
          return secondVal.id
        }
        for (const [key3, value3] of Object.entries(secondVal.properties)) {
          let thirdVal: any = value3
          if(selectedCategory === thirdVal.name){
            return thirdVal.id
          }
        }
      }
    }
  }*/

  return (
    <main className={styles.postForm}>
      <div className={styles.postForm__paper}>
        {!user || !zipAndCity ? null : (
          <>
            <div className={styles.postForm__paperTopRow}>
              {steps.length && activeStep > 0 ? (
                <Button
                  className={styles.postForm__paperTopRowBackButton}
                  onClick={() => setActiveStep((prev) => prev - 1)}
                  title="Back"
                >
                  <ArrowBackIcon />
                </Button>
              ) : onboarding ? (
                <NextLink href="/settings/seller-profile?onboarding=1" passHref>
                  <Button className={styles.postForm__paperTopRowBackButton}>
                    <ArrowBackIcon />
                  </Button>
                </NextLink>
              ) : null}

              <div className={styles.postForm__paperTopRowStepperContainer}>
                {/* <Stepper
                  className={`${wide} ${styles.postForm__paperTopRowStepper}`}
                  activeStep={activeStep}
                  alternativeLabel
                >
                  {steps.map(({ label }, index) => (
                    <Step key={`${label}`}>
                      <StepLabel
                        //StepIconComponent={StepIcon}
                        onClick={() =>
                          index < activeStep && setActiveStep(index)
                        }
                        style={index < activeStep ? { cursor: 'pointer' } : {}}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper> */}
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<QontoConnector />}
                  className={wide}
                >
                  {steps.map(({ label }, index) => (
                    <Step key={`${label}`}>
                      <StepLabel
                        //StepIconComponent={StepIcon}
                        onClick={() =>
                          index < activeStep && setActiveStep(index)
                        }
                        style={index < activeStep ? { cursor: 'pointer' } : {}}
                        StepIconComponent={QontoStepIcon}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<QontoConnector />}
                  className={narrow}
                >
                  {steps.map(({ label }, index) => (
                    <Step key={`${label}`}>
                      <StepLabel
                        //StepIconComponent={StepIcon}
                        onClick={() =>
                          index < activeStep && setActiveStep(index)
                        }
                        style={index < activeStep ? { cursor: 'pointer' } : {}}
                        StepIconComponent={QontoStepIcon}
                      ></StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {/* <Stepper
                  className={`${narrow} ${styles.postForm__paperTopRowStepper}`}
                  activeStep={activeStep}
                  alternativeLabel
                >
                  {steps.map(({ label }, index) => (
                    <Step key={`${label}`}>
                      <StepLabel
                        StepIconComponent={StepIcon}
                        onClick={() =>
                          index < activeStep && setActiveStep(index)
                        }
                        style={index < activeStep ? { cursor: 'pointer' } : {}}
                      />
                    </Step>
                  ))}
                </Stepper> */}
              </div>
            </div>

            <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
              <div className={styles.category_finder_modal}>
                <CategoryFinder
                  retrieveSelectedCategory={(selectedCategory) => {
                    retrieveSelectedCategory(selectedCategory)
                    // automatically close the modal
                    setModalOpen(false)
                  }}
                />
                <button onClick={() => setModalOpen(false)}>
                  <X />
                </button>
              </div>
            </Dialog>

            {(activeStep === 0 || activeStep === 1) && (
              <button className={styles.FAB} onClick={() => setModalOpen(true)}>
                <Search />
              </button>
            )}

            {!error?.message ? null : (
              <Typography variant="body1" color="error" component="div">
                {error?.message}
              </Typography>
            )}

            {activeStep === 0 ? (
              <>
                <div className={styles.postForm__paperTitles}>
                  <Typography variant="h5">
                    Let&apos;s Post Your Service Profile
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Fill in the details below to get started on your new service
                    post.
                  </Typography>
                </div>

                <div className={styles.postForm__paperInputCluster}>
                  <Grid className={styles.postForm__contentCategoriesList}>
                    {categories.map((cat) => (
                      <Box
                        key={cat.id}
                        onClick={() => {
                          console.log(cat.id)
                          setSubCategoryId('')
                          setCategoryId(cat.id)
                        }}
                      >
                        <FormCard item={cat} selectedItem={category_id} />
                      </Box>
                    ))}
                  </Grid>
                  <FormButton
                    disabled={loading || !category_id}
                    setActiveStep={setActiveStep}
                    stepsCount={steps.length}
                    onFinish={_onFinish}
                  />
                </div>
              </>
            ) : activeStep === 1 ? (
              <>
                {/*setAttributes(emptyProperties) */}

                <Breadcrumbs
                  separator="›"
                  aria-label="breadcrumb"
                  className={styles.postForm__breadcrumb}
                >
                  <Typography variant="h4">
                    {categories.find((c) => c.id === category_id)?.name}
                  </Typography>
                </Breadcrumbs>
                <div className={styles.postForm__paperTitles}>
                  <Typography variant="h5">
                    Let&apos;s Select a Sub-Category
                  </Typography>
                </div>
                <div className={styles.postForm__paperInputCluster}>
                  {category_id && (
                    <Grid className={styles.postForm__contentCategoriesList}>
                      {categories
                        .find((c) => c.id === category_id)
                        ?.sub_categories.map((sub) => (
                          <Box
                            key={sub.id}
                            onClick={() => {
                              setSubCategoryId(sub.id),
                                selected_sub_category_id.current != sub.id
                                  ? setformstatus('')
                                  : null
                            }}
                          >
                            <FormCard
                              item={sub}
                              selectedItem={sub_category_id}
                            />
                          </Box>
                        ))}
                    </Grid>
                  )}
                  <FormButton
                    disabled={loading || !category_id || !sub_category_id}
                    setActiveStep={setActiveStep}
                    stepsCount={steps.length}
                    onFinish={_onFinish}
                  />
                </div>
              </>
            ) : activeStep === 2 ? (
              <>
                <Breadcrumbs
                  separator="›"
                  aria-label="breadcrumb"
                  className={styles.postForm__breadcrumb}
                >
                  <Typography variant="h4">
                    {categories.find((c) => c.id === category_id)?.name}
                  </Typography>
                  <Typography variant="h4">
                    {
                      categories
                        .find((c) => c.id === category_id)
                        ?.sub_categories.find((c) => c.id === sub_category_id)
                        ?.name
                    }
                  </Typography>
                </Breadcrumbs>
                <div
                  className={`${styles.postForm__paperTitles} ${styles.postForm__wide}`}
                >
                  <Typography variant="h5">
                    Let clients know about your service
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Fill in the details below to get started on your new service
                    post.
                  </Typography>
                </div>
                <div className={`${styles.postForm__wide}`}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <FormControl fullWidth>
                        <TextField
                          label="Post Title"
                          aria-label="Post Title"
                          size="medium"
                          variant="outlined"
                          required
                          disabled={loading}
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          inputProps={{ maxLength: POST_TITLE_CHARACTER_LIMIT }}
                          className={classes.input}
                        />

                        <div
                          style={{ display: 'flex', justifyContent: 'between' }}
                        >
                          <span style={{ marginTop: '5px', color: 'red' }}>
                            {title &&
                              title.length < POST_TITLE_MIN_CHARACTER_LIMIT &&
                              `Please enter at least {${POST_TITLE_MIN_CHARACTER_LIMIT}} characters`}
                          </span>
                          <span
                            style={{ marginLeft: 'auto', marginTop: '5px' }}
                          >{`${
                            title ? title.length : '0'
                          }/${POST_TITLE_CHARACTER_LIMIT}`}</span>
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div className={styles.postForm__description}>
                        <ReactQuill
                          placeholder="Write a description of your service"
                          modules={modules}
                          readOnly={loading}
                          value={detail}
                          style={{ height: '200px' }}
                          onChange={(text) =>
                            setDetail(
                              text.substring(0, POST_DESC_CHARACTER_LIMIT)
                            )
                          }
                          className={styles.postForm__quill}
                        />
                        <div
                          style={{ display: 'flex', justifyContent: 'between' }}
                        >
                          <span style={{ marginTop: '5px', color: 'red' }}>
                            {detail &&
                              detail.length < POST_DESC_MIN_CHARACTER_LIMIT &&
                              `Please enter at least {${POST_DESC_MIN_CHARACTER_LIMIT}} characters`}
                          </span>
                          <span
                            style={{ marginLeft: 'auto', marginTop: '5px' }}
                          >{`${
                            detail ? detail.length : '0'
                          }/${POST_DESC_CHARACTER_LIMIT}`}</span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div
                        className={styles.postForm__attachment_btn_drop_wrapper}
                      >
                        <div className={styles.postForm__attachmentWrapper}>
                          <Typography variant="h6" component="div">
                            Attachments:
                          </Typography>

                          {!attachment_files.length ? (
                            <Typography
                              variant="body2"
                              component="div"
                              color="textSecondary"
                            >
                              No attachments uploaded yet.
                            </Typography>
                          ) : (
                            attachment_files.map((file, i) => (
                              <div key={file.id}>
                                <Typography
                                  variant="body2"
                                  component="div"
                                  color="textPrimary"
                                >
                                  {i + 1}. {file.name || 'File'}{' '}
                                  <Button
                                    href={file.url}
                                    download={file.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="text"
                                    size="small"
                                    disabled={loading}
                                  >
                                    <Typography
                                      variant="body2"
                                      component="div"
                                      color="primary"
                                    >
                                      PREVIEW
                                    </Typography>
                                  </Button>{' '}
                                  <Button
                                    variant="text"
                                    size="small"
                                    disabled={loading}
                                    onClick={() => {
                                      if (
                                        window.confirm(
                                          `Are you sure you want to remove ${file.name}?`
                                        )
                                      ) {
                                        setAttachmentFiles((prev) =>
                                          prev.filter((f) => f.id !== file.id)
                                        )
                                      }
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      component="div"
                                      color="textSecondary"
                                    >
                                      REMOVE
                                    </Typography>
                                  </Button>
                                </Typography>
                              </div>
                            ))
                          )}

                          {uploadError?.message ? (
                            <Typography
                              variant="body2"
                              component="div"
                              color="error"
                            >
                              Error: {uploadError.message}
                            </Typography>
                          ) : null}
                        </div>
                        {/* siamparvez44 */}
                        {attachment_files.length > MAX_UPLOADED_FILES ? (
                          <div className={styles.postForm__MaxUploaded}>
                            Max Number Of Files Uploaded
                            <br />
                            <br />( Max 3 Files )
                          </div>
                        ) : (
                          <>
                            <Button
                              title={'Max ' + FILE_UPLOAD_SIZE + 'MB'}
                              variant="outlined"
                              size="small"
                              color="primary"
                              disabled={loading || uploading}
                              className={classes.uploadBtn}
                              startIcon={
                                uploading ? (
                                  <CircularProgress size={16} />
                                ) : (
                                  <AddIcon />
                                )
                              }
                              onClick={() => setIsUploadDialogOpen(true)}
                            >
                              {uploading ? 'Uploading…' : 'Upload'}
                            </Button>
                          </>
                        )}
                        {/* siamparvez44 */}
                        <DropzoneDialog
                          open={isUploadDialogOpen}
                          onSave={(files: any) => {
                            // console.log({ files })
                            handleUpload(files)
                            setIsUploadDialogOpen(false)
                          }}
                          acceptedFiles={[
                            'image/jpeg',
                            'image/png',
                            'application/msword',
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            'application/pdf',
                            'application/vnd.ms-excel',
                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                          ]}
                          filesLimit={1}
                          maxFileSize={sizeInMB}
                          useChipsForPreview={true}
                          previewText="Selections:"
                          onClose={() => setIsUploadDialogOpen(false)}
                          submitButtonText="Upload"
                        />

                        <FormButton
                          disabled={
                            loading ||
                            !title ||
                            (title &&
                              title.length < POST_TITLE_MIN_CHARACTER_LIMIT) ||
                            !detail ||
                            (detail &&
                              detail.length < POST_DESC_MIN_CHARACTER_LIMIT) ||
                            uploading
                          }
                          setActiveStep={setActiveStep}
                          stepsCount={steps.length}
                          onFinish={_onFinish}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </>
            ) : activeStep === 3 ? (
              <>
                <Breadcrumbs
                  separator="›"
                  aria-label="breadcrumb"
                  className={styles.postForm__breadcrumb}
                >
                  <Typography variant="h4">
                    {categories.find((c) => c.id === category_id)?.name}
                  </Typography>
                  <Typography variant="h4">
                    {
                      categories
                        .find((c) => c.id === category_id)
                        ?.sub_categories.find((c) => c.id === sub_category_id)
                        ?.name
                    }
                  </Typography>
                </Breadcrumbs>
                <div
                  className={`${styles.postForm__paperTitles} ${styles.postForm__wide}`}
                >
                  <div className={styles.postForm__priceYearsWrapper}>
                    <div className={styles.postForm__priceWrapper}>
                      <FormControl fullWidth>
                        <Typography
                          variant="h5"
                          color="primary"
                          gutterBottom
                          align="left"
                        >
                          {' '}
                          Price{' '}
                        </Typography>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                          }}
                        >
                          <Typography variant="h3" color="textSecondary">
                            {' '}
                            ${price_range && price_range[0].toString()}{' '}
                          </Typography>
                          <span style={{ margin: '0 10px', fontSize: '25px' }}>
                            {' '}
                            to{' '}
                          </span>
                          <Typography variant="h3" color="textSecondary">
                            {' '}
                            ${price_range && price_range[1].toString()}{' '}
                          </Typography>
                        </div>

                        <Slider
                          getAriaLabel={() => 'Price range'}
                          value={price_range}
                          min={1}
                          onChange={handlePriceChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={price_rangetext}
                        />
                      </FormControl>
                    </div>
                    <div className={styles.postForm__yearsWrapper}>
                      <FormControl fullWidth>
                        <Typography
                          variant="h5"
                          color="primary"
                          gutterBottom
                          align="left"
                        >
                          {' '}
                          Years of Paid Experience{' '}
                        </Typography>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                          }}
                        >
                          <Typography variant="h3" color="textSecondary">
                            {' '}
                            {years_of_experience?.toString() || '1'} Year(s)
                          </Typography>
                        </div>
                        <Slider
                          value={years_of_experience}
                          min={1}
                          onChange={(event: any, newValue: number | number[]) =>
                            setYearsOfExperience(newValue as number)
                          }
                          aria-labelledby="years of experience"
                        />
                      </FormControl>
                    </div>
                  </div>
                  <TextField
                    className={clsx(classes.input, 'mt-3')}
                    multiline
                    label="Describe your pricing (optional)"
                    aria-label="Describe your pricing (optional)"
                    size="medium"
                    variant="outlined"
                    disabled={loading}
                    value={price_description && price_description.toString()}
                    // onChange={(e) => {
                    //   const newPriceRange = [...price_range]
                    //   newPriceRange[i].price_description = e.target.value
                    //   setPriceRange(newPriceRange)
                    // }}
                    onChange={(e) => setPriceDescription(e.target.value)}
                    rows="4"
                    inputProps={{ maxLength: PRICING_DESC_CHARACTER_LIMIT }}
                  />
                  {/* siamparvez44 */}
                  <span style={{ marginLeft: 'auto', marginTop: '5px' }}>{`${
                    price_description?.length ? price_description?.length : '0'
                  }/${PRICING_DESC_CHARACTER_LIMIT}`}</span>

                  <FormButton
                    disabled={loading || price_range.length < 1}
                    setActiveStep={setActiveStep}
                    stepsCount={steps.length}
                    onFinish={_onFinish}
                  />
                </div>
              </>
            ) : null}

            {activeStep > 3 ? (
              <>
                <Breadcrumbs
                  separator="›"
                  aria-label="breadcrumb"
                  className={styles.postForm__breadcrumb}
                >
                  <Typography variant="h4">
                    {categories.find((c) => c.id === category_id)?.name}
                  </Typography>
                  <Typography variant="h4">
                    {
                      categories
                        .find((c) => c.id === category_id)
                        ?.sub_categories.find((c) => c.id === sub_category_id)
                        ?.name
                    }
                  </Typography>
                </Breadcrumbs>

                {steps[4]?.data.map((step: any) => {
                  return (
                    <>
                      <Grid container>
                        {step?.possible_values?.map((item: any) => (
                          <>
                            <Grid item sm={12}>
                              <h3>{item?.display_name}</h3>
                            </Grid>
                            <Grid item sm={12} md={12}>
                              {item.values.map((s: any) => {
                                const arr = s.values ?? []
                                return (
                                  <>
                                    <Typography variant="h5">
                                      {s?.display_name}
                                    </Typography>

                                    {arr.map((arri: InputElementsType) => (
                                      <InputElements
                                        prop={arri}
                                        handleChange={handleChange}
                                        parent={step.display_name}
                                        key={arri.label}
                                        attributes={
                                          selected_sub_category_id.current !=
                                          sub_category_id
                                            ? formstatus
                                            : attributes
                                        }
                                      />
                                    ))}

                                    <Divider
                                      component="hr"
                                      variant="fullWidth"
                                      style={{
                                        width: '60%',
                                        margin: '30px auto',
                                        height: '3px',
                                      }}
                                    />
                                  </>
                                )
                              })}
                            </Grid>
                          </>
                        ))}
                      </Grid>
                    </>
                  )
                })}

                <Grid container justifyContent="center">
                  <FormButton
                    disabled={loading || Object.values(attributes).length < 1}
                    setActiveStep={setActiveStep}
                    stepsCount={steps.length}
                    onFinish={_onFinish}
                  />
                </Grid>
              </>
            ) : null}
          </>
        )}
      </div>
    </main>
  )
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }, { background: [] }, { script: 'sub' }, { script: 'super' }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
  ],
}

export default PostForm
