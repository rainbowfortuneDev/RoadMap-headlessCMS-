import { useEffect, useRef, useState } from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import PauseIcon from '@mui/icons-material/Pause'

import { makeStyles } from '@mui/styles'
import Tooltip from '@mui/material/Tooltip'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import DeleteIcon from '../../assets/icons/_shared/post-card/Delete.svg'
import EditIcon from '../../assets/icons/_shared/post-card/Edit.svg'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
// import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

import clsx from 'clsx'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { ChevronRight } from 'react-feather'
import ReactHtmlParser from 'react-html-parser'
// import ReactQuill from "react-quill";
import dynamic from 'next/dynamic';
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";
import chatIcon from '../../assets/icons/_shared/post-card/chat.svg'

import DollarIcon from '@mui/icons-material/MonetizationOn'
import LocationIcon from '@mui/icons-material/LocationOn'
import PhoneCallIcon from '@mui/icons-material/Phone'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import DescriptionIcon from '@mui/icons-material/Description'

import NationalImg from '../../assets/images/post-card/national.png'
import SponsorImg from '../../assets/images/post-card/sponsor.png'
import SubscribeImg from '../../assets/images/post-card/subscribe.png'
import {
  Categories as CategoryType,
  Cities as CityType,
  Files as FileType,
  Possible_Values as PossibleValueType,
  Posts as PostType,
  Post_Attachments as PostAttachmentType,
  Post_Attributes as PostAttributeType,
  Properties as PropertyType,
  Sub_Categories as SubCategoryType,
  useCancelPaypalSubscriptionGqlMutation,
  useCancelStripeSubscriptionGqlMutation,
} from '../../generated/graphql'

// import { BusinessSize } from '../../utils/auth/types'
import { useUser } from '../../utils/user/user-context'
import { useCity } from '../../utils/city/city-context'

import AttachmentSection from '../common/attachment-section'
import type { SellerDetailProps } from '../seller-detail/seller-detail'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import styles from './post-detail.module.scss'
import { useSnackbar } from 'notistack'
import {
  useCreateRoomForUserMutation,
  useGetRoomForUserQuery,
  usePostCard__UpdatePostMutation,
  usePostCard__DeletePostMutation,
  useSendMessageMutation,
} from '../../generated/graphql'
import { enablePayment } from '../../utils/config'

export type PostDetailProps = {
  post: Pick<
    PostType,
    | 'id'
    | 'alt_id'
    | 'posted_by'
    | 'title'
    | 'years_of_experience'
    | 'detail'
    | 'price_range'
    | 'price_description'
    | 'promotion_status'
    | 'post_attribute'
  > & {
    user: Omit<SellerDetailProps['user'], 'zip_code'> & {
      zip_code: {
        city: Pick<
          CityType,
          | 'id'
          | 'name'
          | 'latitude'
          | 'longitude'
          | 'alt_id'
          | 'state_code'
          | any
        >
      }
    }
    post_attachments: (Pick<PostAttachmentType, 'id'> & {
      file: Pick<FileType, 'url' | 'name'>
    })[]

    // post_prices: Pick<PostPriceType, 'id' | 'price' | 'detail'>[]

    sub_category: Pick<SubCategoryType, 'id' | 'name'> & {
      category: Pick<CategoryType, 'id' | 'name'> & {
        sub_categories: Pick<SubCategoryType, 'id'>[]
      }
    }
    // @ts-ignore
    post_attributes: (Pick<PostAttributeType, 'id'> & {
      // @ts-ignore
      possible_value: Pick<PossibleValueType, 'name'> & {
        property: Pick<PropertyType, 'display_name' | 'order'>
      }
    })[]
    payments?: {
      paypal_subscription_id: string
      stripe_subscription_id: string
    }
  }
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: 18,
      top: '-5px',
      left: '0',
      right: '0',
      bottom: '0',
      margin: '0',
      padding: '0 8px',
      overflow: 'hidden',
      position: 'absolute',
      borderStyle: 'solid',
      borderWidth: '1px',
      pointerEvents: 'none',
      '& legend': {
        visibility: 'hidden',
      },
    },
  },
}))

var getInitials = function (string) {
  var names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }
  return initials
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = match[1] ? '+1 ' : ''
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}

function PostDetail({ post }: PostDetailProps) {
  const classes = useStyles()
  const { user: me, userLoading } = useUser()

  const { quill, quillRef, Quill } = useQuill({
    modules: { toolbar: false }
  });
 // your code with access to window or document object here 
  useEffect(() => {
    // if (Quill && !quill) {
    //   Quill.register("modules/blotFormatter", BlotFormatter);
    // }
    if (quill) {
      quill.enable(false);
      quill.pasteHTML(post.detail);
    }
  });

  const possibleAttributes = post?.post_attribute?.possible_value || {}

  const router = useRouter()
  const { user = {} as any } = post

  const { zipAndCity } = useCity(false)

  const updatePost = usePostCard__UpdatePostMutation()[1]
  const deletePost = usePostCard__DeletePostMutation()[1]

  const cancelPaypalSub = useCancelPaypalSubscriptionGqlMutation()[1]
  const cancelStripeSub = useCancelStripeSubscriptionGqlMutation()[1]

  const [windowWidth, setWindowWidth] = useState(0)
  // const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth)
    // setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  const handleDelete = useCallback(async () => {
    try {
      // if (window.confirm('Are you sure you want to delete this post?')) {
      if (post.payments?.paypal_subscription_id) {
        cancelPaypalSub({
          post_id: post.id,
          sub_id: post.payments?.paypal_subscription_id,
        })
      } else if (post.payments?.stripe_subscription_id) {
        cancelStripeSub({
          post_id: post.id,
          sub_id: post.payments?.stripe_subscription_id,
        })
      }

      const { error } = await deletePost({
        post_id: post.id,
      })

      if (error) {
        enqueueSnackbar(error.message || 'Error deleting post!', {
          variant: 'error',
        })
      } else {
        router.push(`/seller/${user.alt_id}`)
        enqueueSnackbar('Post was deleted!', {
          variant: 'success',
        })
      }
      // router.prefetch(router.basePath, router.asPath, { priority: true })
      // }
    } catch (e) {
      enqueueSnackbar((e as Error)?.message || 'Error updating post!', {
        variant: 'error',
      })
    }
  }, [deletePost, post.id, user.alt_id]) // eslint-disable-line react-hooks/exhaustive-deps

  function handlePauseOpen() {
    setOpen1(true)
  }

  function handleDeleteOpen() {
    setOpen(true)
  }

  //const [_isPaused, setIsPaused] = useState(false)
  //const [_isUnpaused, setIsUnpaused] = useState(false)
  // const [isSentSuccess, setIsSentSuccess] = useState(false)
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [roomCreated, setRoomCreated] = useState(false)
  const [{}, sendMessage] = useSendMessageMutation()
  const [{}, createRoom] = useCreateRoomForUserMutation()
  const [roomIDnew, setroomIDnew] = useState('')
  const [room] = useGetRoomForUserQuery({
    variables: {
      user_id: user.id,
      my_id: me?.id,
    },
  })
  const { enqueueSnackbar } = useSnackbar()


  const sendMsgToChat = async () => {
    if (!room.fetching) {
      if (newMessage.length > 0) {
        let roomIn: any
        if (room.data?.rooms[0]?.id || roomCreated) {
          try {
            await sendMessage({
              content: newMessage,
              user_id: user?.id,
              room_id: roomCreated ? roomIDnew : room.data?.rooms[0].id,
            })
            enqueueSnackbar('Message Sent!', {
              variant: 'success',
            })
          } catch (err) {
            enqueueSnackbar('There was an Error', {
              variant: 'error',
            })
          }
        } else {
          roomIn = await createRoom({
            user_id: user.id,
            my_id: me?.id,
          })

          setRoomCreated(true)
          try {
            await sendMessage({
              content: newMessage,
              user_id: user?.id,
              room_id: roomIn?.data?.insert_rooms?.returning[0].id,
            })
            setroomIDnew(roomIn?.data?.insert_rooms?.returning[0].id)
            enqueueSnackbar('Message Sent!', {
              variant: 'success',
            })
          } catch (err) {
            enqueueSnackbar('There was an Error', {
              variant: 'error',
            })
          }
        }
      } else {
        enqueueSnackbar("Message can't be empty!", {
          variant: 'error',
        })
      }
      setNewMessage('')
    }
  }
  const sendToLogin = () => {
    enqueueSnackbar('Message sent failed, please Login!', {
      variant: 'error',
    })
    router.replace(`/login?continue=${encodeURIComponent(router.asPath)}`)
  }

  const postCardRef = useRef<any>(null)
  const [titleWidth, settitleWidth] = useState<any>('100%')

  function onResize() {
    if (window.innerWidth < 768) {
      var w = window.innerWidth - 100
    } else {
      var w = postCardRef.current.offsetWidth - 100
    }
    if (titleWidth == '100%') {
      settitleWidth(w)
    } else {
      if (Math.abs(titleWidth - w) > 50) {
        settitleWidth(w)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const handlePause = async () => {
    //if (window.confirm('Are you sure you want to pause this post?')) {
    try {
      updatePost({
        post_id: post.id,
        promotion_status: 9,
      }).then(({ data }) => {
        const id = data?.update_posts?.returning[0]?.id

        if (id) {
          //setIsPaused(true)
          //setIsUnpaused(false)
          router.replace(router.asPath)
          enqueueSnackbar('Post was paused!', {
            variant: 'success',
          })

          // setIsSentSuccess(true)
        } else {
          enqueueSnackbar('Error pausing post!', {
            variant: 'error',
          })
        }
      })
    } catch (e) {
      enqueueSnackbar((e as Error)?.message || 'Error pausing post!', {
        variant: 'error',
      })
    }
  }

  const handleUnpause = async () => {
    //if (window.confirm('Are you sure you want to unpause this post?')) {
    try {
      updatePost({
        post_id: post.id,
        promotion_status: 4,
      }).then(({ data }) => {
        const id = data?.update_posts?.returning[0]?.id

        if (id) {
          //setIsPaused(true)
          //setIsUnpaused(false)
          router.replace(router.asPath)
          enqueueSnackbar('Post was unpaused!', {
            variant: 'success',
          })

          // setIsSentSuccess(true)
        } else {
          enqueueSnackbar('Error unpausing post!', {
            variant: 'error',
          })
        }
      })
    } catch (e) {
      enqueueSnackbar((e as Error)?.message || 'Error unpausing post!', {
        variant: 'error',
      })
    }
  }

  return (
    <>
      <Header />
      <Container>
        <div className={classes.root}>
          <div className={styles.postDetail__postCategory}>
            <Link href={`/?stay=1`} variant="body1" color="textSecondary">
              {user.zip_code.city.name}, {user.zip_code.city.state_code}
            </Link>
            <ChevronRight fontSize="small" />

            {zipAndCity && (
              <Link
                href={`/posts/${user.zip_code?.city.name
                  .toLowerCase()
                  .replace(/[^\w ]+/g, '')
                  .replace(
                    / +/g,
                    '-'
                  )}-${user.zip_code?.city.state_code.toLowerCase()}/${
                  user.zip_code?.city.alt_id
                } /${zipAndCity && zipAndCity.latitude}/${encodeURIComponent(
                  zipAndCity && zipAndCity.longitude
                )}/${post.sub_category?.category.name}/1`}
                variant="body1"
                color="textSecondary"
              >
                {post?.sub_category?.category?.name}
              </Link>
            )}

            <ChevronRight fontSize="small" />
            {zipAndCity && (
              <Link
                href={`/posts/${user.zip_code?.city.name
                  .toLowerCase()
                  .replace(/[^\w ]+/g, '')
                  .replace(
                    / +/g,
                    '-'
                  )}-${user.zip_code?.city.state_code.toLowerCase()}/${
                  user.zip_code?.city.alt_id
                }/${zipAndCity && zipAndCity.latitude}/${encodeURIComponent(
                  zipAndCity && zipAndCity.longitude
                )}/${post.sub_category?.name.toLowerCase()}/1`}
                variant="body1"
                color="textSecondary"
              >
                {post?.sub_category?.name}
              </Link>
            )}
          </div>

          <Grid container spacing={4} mb={8}>
            {/* LEFT SIDE */}
            <Grid ref={postCardRef} item md={4} xs={12}>
              <Grid className={styles.card}>
                {/* image - replace with an actual image */}
                <div className={styles.card__img}>
                  {user.avatar?.url ? (
                    <Image
                      className={styles.postDetail__avatar}
                      alt={`${user.full_name}'s Avatar`}
                      src={user.avatar?.url}
                      layout="fill"
                      priority
                    />
                  ) : (
                    <div
                      className={styles.avatar}
                      style={{ backgroundColor: getRandomColor() }}
                    >
                      {getInitials(
                        user.is_privacy_enabled
                          ? user.full_name
                          : user.business_name
                      )}
                    </div>
                  )}
                </div>

                {/* badge */}
                {post.promotion_status &&
                (post.promotion_status === 1 ||
                  post.promotion_status === 2 ||
                  post.promotion_status === 3 ||
                  post.promotion_status === 9 ||
                  post.promotion_status === 10) ? (
                  <div className={styles.postCard__promotionStatus}>
                    {post.promotion_status === 1 ? (
                      <Badge image={SponsorImg} type="SPONSORED" />
                    ) : post.promotion_status === 2 ? (
                      <Badge image={SubscribeImg} type="SUBSCRIBED" />
                    ) : post.promotion_status === 3 ? (
                      <Badge image={NationalImg} type="NATIONAL" />
                    ) : post.promotion_status === 9 ? (
                      <>
                        <label className={styles.postDetail_badge_paused}>
                          PAUSED
                        </label>
                      </>
                    ) : post.promotion_status === 10 ? (
                      <>
                        <label className={styles.postDetail_badge_inactive}>
                          INACTIVE
                        </label>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : null}

                {/* username */}
                <NextLink href={`/seller/${user.alt_id}`}>
                  <Typography
                    color="textSecondary"
                    component="a"
                    pb={2}
                    className={styles.postDetail_user_name_text}
                  >
                    {user.is_privacy_enabled === true
                      ? user.full_name
                      : user.business_name
                      ? user.business_name
                      : user.full_name}
                  </Typography>
                </NextLink>

                {/* title */}
                <Typography mt={1} className={styles.postDetail_user_info_text}>
                  {post.title}
                </Typography>

                <div
                  style={{ paddingBottom: 5 }}
                  className={styles.postCard__location_price_wrapper}
                >
                  <div className={styles.postCard__price_wrapper}>
                    <div className={styles.postCard__price_svg_wrapper}>
                      <DollarIcon />
                    </div>
                  </div>
                  <Typography variant="body2" color="textSecondary">
                    {!post.price_range ? (
                      <span className={styles.postCard__colorText}>N/A</span>
                    ) : (
                      <>
                        <span className={styles.postCard__colorText}>
                          ${post.price_range[0]}
                        </span>
                        <span> - </span>
                        <span className={styles.postCard__colorText}>
                          ${post.price_range[1]} /hr
                        </span>
                      </>
                    )}
                  </Typography>

                  {(post.user.business_size == 'INDIVIDUAL' ||
                    post.user.is_privacy_enabled == false ||
                    !user.public_contact_address) && (
                    <div className={styles.postCard__location_wrapper}>
                      <div className={styles.postCard__location_svg_wrapper}>
                        <LocationIcon />
                      </div>
                      <Typography color="textSecondary">
                        <span className={styles.postCard__colorTextSecondary}>
                          {user.zip_code?.city.name},{' '}
                          {user.zip_code?.city.state_code}
                        </span>
                      </Typography>
                    </div>
                  )}
                </div>
                {user.public_contact_address &&
                  post.user.business_size !== 'INDIVIDUAL' && (
                    <div
                      style={{ paddingBottom: 5 }}
                      className={styles.postCard__location_price_wrapper}
                    >
                      <div className={styles.postCard__price_wrapper}>
                        <div className={styles.postCard__location_svg_wrapper}>
                          <LocationIcon />
                        </div>

                        <Typography color="textSecondary">
                          <span className={styles.postCard__colorTextSecondary}>
                            {user.public_contact_address}
                            <br />
                          </span>

                          <span className={styles.postCard__colorTextSecondary}>
                            {user.zip_code?.city.name},{' '}
                            {user.zip_code?.city.state_code}
                          </span>
                        </Typography>
                      </div>
                    </div>
                  )}

                <div
                  style={{ paddingBottom: 10 }}
                  className={styles.postCard__location_price_wrapper}
                >
                  {post.user.business_size !== 'INDIVIDUAL' &&
                  post.user.public_phone ? (
                    <Link
                      href={`tel:${post.user.public_phone
                        .replace(/ /g, '')
                        .replace(/\-/g, '')}`}
                    >
                      {'\u00a0\u00a0'} <PhoneCallIcon />{' '}
                      {'\u00a0\u00a0\u00a0\u00a0\u00a0' +
                        formatPhoneNumber(post.user.public_phone)}
                    </Link>
                  ) : (
                    <span />
                  )}
                </div>

                {post.years_of_experience !== null &&
                  post.years_of_experience > 0 && (
                    <div
                      style={{ paddingBottom: 5 }}
                      className={styles.postCard__location_price_wrapper}
                    >
                      <div className={styles.postCard__price_wrapper}>
                        <div className={styles.postCard__yearxp_svg_wrapper}>
                          <AccessTimeFilledIcon />
                        </div>
                      </div>
                      <Typography variant="body2" color="textSecondary">
                        {!post.years_of_experience ? (
                          <span className={styles.postCard__colorText}>
                            N/A
                          </span>
                        ) : (
                          <>
                            {post.years_of_experience} year
                            {post.years_of_experience === 1 ? '' : 's'} of
                            experience
                          </>
                        )}
                      </Typography>
                    </div>
                  )}

                {post.price_description && (
                  <div
                    style={{ paddingBottom: 20 }}
                    className={styles.postCard__location_price_wrapper}
                  >
                    <div className={styles.postCard__price_wrapper}>
                      <div className={styles.postCard__price_desc_svg_wrapper}>
                        <DescriptionIcon />
                      </div>
                    </div>

                    <Typography variant="body2" color="textSecondary">
                      {post.price_description ? post.price_description : 'N/A'}
                    </Typography>
                  </div>
                )}

                {/* message box */}
                <div className={styles.postDetail_msgbtn}>
                  {me?.id === user.id ? (
                    <>
                      {enablePayment && (
                        <NextLink href={`/post/payment/${post.alt_id}`}>
                          <Tooltip title="Subscription">
                            <IconButton>
                              <DollarIcon />
                            </IconButton>
                          </Tooltip>
                        </NextLink>
                      )}

                      <NextLink href={`/post/edit/${post.alt_id}`}>
                        <Tooltip title="Edit">
                          <IconButton>
                            <Image src={EditIcon} />
                          </IconButton>
                        </Tooltip>
                      </NextLink>

                      {post.promotion_status > 3 &&
                        post.promotion_status !== 10 && (
                          <Tooltip
                            title={
                              post.promotion_status === 9 ? 'Un-Pause' : 'Pause'
                            }
                          >
                            <IconButton
                              onClick={() => {
                                handlePauseOpen()
                              }}
                            >
                              {post.promotion_status === 9 ? (
                                <PauseIcon sx={{ fontSize: 25 }}></PauseIcon>
                              ) : (
                                <PlayArrowIcon
                                  sx={{ fontSize: 25 }}
                                ></PlayArrowIcon>
                              )}
                            </IconButton>
                          </Tooltip>
                        )}

                      {post.promotion_status != 8 && (
                        <Dialog
                          open={open1}
                          className={styles.pauseDialog}
                          onClose={() => {
                            setOpen1(false)
                          }}
                        >
                          <DialogContent
                            className={styles.pauseDialog__content}
                          >
                            <DialogContentText
                              id="alert-dialog-description"
                              className={styles.pauseDialog__text}
                            ></DialogContentText>
                            <DialogContentText
                              id="alert-dialog-description"
                              className={styles.pauseDialog__text}
                            >
                              Are you sure you want to{' '}
                              {post.promotion_status === 9
                                ? 'un-Pause'
                                : 'pause'}{' '}
                              this post?
                            </DialogContentText>
                          </DialogContent>

                          <DialogActions
                            className={styles.pauseDialog__actions}
                          >
                            <Button
                              className={`${styles.pauseDialog__button} ${styles.pauseDialog__button_outline}`}
                              variant="outlined"
                              onClick={() => {
                                setOpen1(false)
                              }}
                            >
                              Cancel
                            </Button>

                            <Button
                              className={styles.pauseDialog__button}
                              variant="contained"
                              onClick={() => {
                                post.promotion_status === 9
                                  ? handleUnpause()
                                  : handlePause()
                                setOpen1(false)
                              }}
                              autoFocus
                            >
                              {post.promotion_status === 9
                                ? 'Un-Pause'
                                : 'Pause'}
                            </Button>
                          </DialogActions>
                        </Dialog>
                      )}

                      {post.promotion_status > 3 && post.promotion_status != 8 && (
                        <Tooltip title="Delete">
                          <IconButton onClick={handleDeleteOpen}>
                            <Image src={DeleteIcon} />
                          </IconButton>
                        </Tooltip>
                      )}

                      <Dialog
                        className={styles.pauseDialog}
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description22"
                      >
                        <DialogContent className={styles.pauseDialog__content}>
                          <DialogContentText
                            id="alert-dialog-description22"
                            className={styles.pauseDialog__text}
                          >
                            Are you sure you want to delete this post?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions className={styles.pauseDialog__actions}>
                          <Button
                            className={`${styles.pauseDialog__button} ${styles.pauseDialog__button_outline}`}
                            variant="outlined"
                            onClick={() => {
                              setOpen(false)
                              // setIsAgree(false)
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            className={styles.pauseDialog__button}
                            variant="contained"
                            onClick={() => {
                              handleDelete()
                              setOpen(false)
                            }}
                            autoFocus
                          >
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </>
                  ) : (
                    <>
                      {!userLoading && (!me || (me && post.user.id !== me.id)) && (
                        <div className={styles.postCard__chatmsg}>
                          <TextField
                            id="outlined-basic"
                            label="type a message"
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{ className: classes.input }}
                            value={newMessage}
                            onChange={(e: any) => setNewMessage(e.target.value)}
                          />
                          <div
                            className={styles.postCard__chatlink}
                            onClick={me ? sendMsgToChat : sendToLogin}
                          >
                            <Image alt="chatIcon" src={chatIcon} />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </Grid>
              {/* attachments */}

              {post.post_attachments?.length > 0 && (
                <Grid className={styles.card} mt={2}>
                  <Typography variant="h6" gutterBottom>
                    ATTACHMENTS
                  </Typography>
                  {post?.post_attachments?.length ? (
                    <>
                      <Divider className="mb-2" />
                      <div
                        className={styles.postDetail__postAttachment_wrapper}
                      >
                        <Grid container spacing={5} style={{ marginTop: 5 }}>
                          {post?.post_attachments.map((attachment, i) => (
                            <AttachmentSection
                              key={attachment.id}
                              attachment={attachment}
                              i={i}
                            ></AttachmentSection>
                          ))}
                        </Grid>
                      </div>
                    </>
                  ) : (
                    'No attachments'
                  )}
                </Grid>
              )}
            </Grid>
            {/* LEFT SIDE END */}

            {/* RIGHT SIDE */}
            <Grid item md={8} sm={12}>
              <Grid className={styles.card}>
                <div>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={styles.postDetail__description}
                  >
                    Description
                  </Typography>
                  <Typography
                    className={clsx(styles.postDescription, 'mb-4')}
                    color="textSecondary"
                    style={{
                      width:
                        windowWidth < 525
                          ? windowWidth - 0.1 * windowWidth
                          : '100%',
                      fontWeight: 'bold',
                      wordWrap: 'break-word',
                    }}
                  >
                    {console.log(windowWidth)}
{/*                    {ReactHtmlParser(post.detail)}*/}
{/*                    {() => quill.enable(false)}*/}
                    <div ref={quillRef} />
{/*                    <ReactQuill theme="snow" modules={modules} value={post.detail} />*/}
                  </Typography> 
                </div>
                {Object.keys(possibleAttributes).map((key, idx) => (
                  <div style={{ paddingBottom: '20px' }} key={idx}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={styles.postDetail__description}
                      key={key}
                    >
                      {key}
                    </Typography>
                    <div className="flex items-center">
                      <div className={styles.postDetail__dotIcon}></div>
                      <Typography className="ml-2" color="textSecondary">
                        {Object.keys(possibleAttributes[key])
                          .map((k) =>
                            typeof possibleAttributes[key][k] === 'boolean'
                              ? `${k}`
                              : `${k}: ${possibleAttributes[key][k]}`
                          )
                          .join(' - ')}
                      </Typography>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
            {/* RIGHT SIDE END */}
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default PostDetail

type BadgeType = 'SPONSORED' | 'SUBSCRIBED' | 'NATIONAL'

const Badge = ({ type, image }: { type: BadgeType; image: any }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.badge__img}>
        <Image alt="SponsorImg" src={image} />
      </div>
      {type === 'SPONSORED' && (
        <div className={styles.badge__text_sponsored}>
          <span>Sponsored</span>
        </div>
      )}
      {type === 'SUBSCRIBED' && (
        <div className={styles.badge__text_subscribed}>
          <span>Subscribed</span>
        </div>
      )}
      {type === 'NATIONAL' && (
        <div className={styles.badge__text_national}>
          <span>National</span>
        </div>
      )}
    </div>
  )
}
