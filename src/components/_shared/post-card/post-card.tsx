import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
// import { styled } from '@mui/system'

import { styled } from '@mui/material'
// import Stack from '@mui/material/Stack'

import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import clsx from 'clsx'
//@ts-ignore
import flatten from 'flat'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useEffect, useRef, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

import chatIcon from '../../../assets/icons/_shared/post-card/chat.svg'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
// import SellIcon from '@mui/icons-material/Sell';
import NationalImg from '../../../assets/images/post-card/national.png'
import SponsorImg from '../../../assets/images/post-card/sponsor.png'
import SubscribeImg from '../../../assets/images/post-card/subscribe.png'

import CategoryIcon from '@mui/icons-material/Category'
import DollarIcon from '@mui/icons-material/MonetizationOn'
import EditIcon from '@mui/icons-material/Edit'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import LocationIcon from '@mui/icons-material/LocationOn'
import PhoneCallIcon from '@mui/icons-material/Phone'
import TrashIcon from '@mui/icons-material/Delete'
import Close from '@mui/icons-material/Close'

import {
  useCreateRoomForUserMutation,
  useGetRoomForUserQuery,
  usePostCard__UpdatePostMutation,
  usePostCard__DeletePostMutation,
  useSendMessageMutation,
} from '../../../generated/graphql'

import { useCity } from '../../../utils/city/city-context'
import { useUser } from '../../../utils/user/user-context'
import Link from '../link/link'
import styles from './post-card.module.scss'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import { usePostCardStyles } from './styles'
import { enablePayment } from '../../../utils/config'

import {
  Categories as CategoryType,
  Files as FileType,
  Posts as PostType,
  Sub_Categories as SubCategoryType,
  useCancelPaypalSubscriptionGqlMutation,
  useCancelStripeSubscriptionGqlMutation,
  Users as UserType,
} from '../../../generated/graphql'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
// import DialogTitle from '@mui/material/DialogTitle'

// @ts-ignore
type CommonInPostModes = Pick<
  PostType,
  'id' | 'title' | 'detail' | 'price_range' | 'alt_id' | 'price_description'
> & {
  user: Pick<
    UserType,
    | 'id'
    | 'alt_id'
    | 'email'
    | 'public_phone'
    | 'zip_code'
    | 'is_privacy_enabled'
    | 'full_name'
    | 'business_name'
    | 'business_size'
  > & {
    avatar: Pick<FileType, 'url'>
  }

  price_range: String
  price_description: String
  category_name: String
  category_id: String
  sub_category_name: String
  sub_category_id: String
  sub_category: Pick<SubCategoryType, 'id' | 'name'> & {
    category: Pick<CategoryType, 'id' | 'name'>
  }
  promotion_status: String | number
  tags: any
  post_attribute: any
  payments?: {
    paypal_subscription_id: string
    stripe_subscription_id: string
  }
}

export type PostCardProps =
  | { mode: 'MINI'; post: CommonInPostModes; pageName: string }
  | {
      mode: 'LARGE'
      post: CommonInPostModes & { detail?: PostType['detail'] }
      pageName: string
    }
  | {
      mode: 'OWNER'
      post: CommonInPostModes & { detail?: PostType['detail'] }
      pageName: string
    }

const ChipStyle = styled(Chip)(({}) => ({
  fontSize: 10,
  borderRadius: 9,
  backgroundColor: 'rgba(149, 124, 252, 0.2)',
  color: '#0844CC',
  fontWeight: 500,
  margin: '4px 0px',
  marginRight: 8,
}))

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = match[1] ? '+1 ' : ''
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}

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

export default function PostCard(props: PostCardProps) {
  const { mode, post, pageName } = props
  const classes = usePostCardStyles()
  const [newMessage, setNewMessage] = useState('')
  const [roomCreated, setRoomCreated] = useState(false)
  const [{}, sendMessage] = useSendMessageMutation()
  const [{}, createRoom] = useCreateRoomForUserMutation()
  const [roomIDnew, setroomIDnew] = useState('')
  const [menuEl, setMenuEl] = useState(null)
  //Box Dialog

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [_isPaused, setIsPaused] = useState(false)
  const [_isUnpaused, setIsUnpaused] = useState(false)

  const isMenuOpened = Boolean(menuEl)
  function handleOpenMenu(event: any) {
    setMenuEl(event.currentTarget)
  }
  function handleCloseMenu() {
    setMenuEl(null)
  }

  function handleDeleteOpen() {
    setOpen(true)
  }
  function handlePauseOpen() {
    setOpen1(true)
  }
  const { user } = useUser(false)
  // console.log("=============================Post Detail",post.detail)
  const postUser = post.user

  const possibleAttributes = post?.post_attribute?.possible_value || {}

  //call get room for user
  const [room] = useGetRoomForUserQuery({
    variables: {
      user_id: postUser.id,
      my_id: user?.id,
    },
  })

  const getValueOfTag = (tag: string) => {
    const tagArr = tag.split('.')
    return tagArr[tagArr.length - 1]
  }

  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const updatePost = usePostCard__UpdatePostMutation()[1]
  const deletePost = usePostCard__DeletePostMutation()[1]

  const cancelPaypalSub = useCancelPaypalSubscriptionGqlMutation()[1]
  const cancelStripeSub = useCancelStripeSubscriptionGqlMutation()[1]

  const { zipAndCity } = useCity()
  if (!zipAndCity) return null
  const [_isDeleted, setIsDeleted] = useState(false)
  // if (_isDeleted) {
  //   setIsAgree(false)
  // }
  //if (isPaused) return null
  //if (isUnpaused) return null

  // console.log('IsPaused' + _isPaused)

  // const handleDelete = useCallback(async () => {
  const handleDelete = async () => {
    try {
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
        setIsDeleted(true)
        router.replace(router.asPath)
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
  }

  const handlePause = async () => {
    try {
      updatePost({
        post_id: post.id,
        promotion_status: 9,
      }).then(({ data }) => {
        const id = data?.update_posts?.returning[0]?.id

        if (id) {
          setIsPaused(true)
          setIsUnpaused(false)
          router.replace(router.asPath)
          enqueueSnackbar('Post was paused!', {
            variant: 'success',
          })
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
    try {
      updatePost({
        post_id: post.id,
        promotion_status: 4,
      }).then(({ data }) => {
        const id = data?.update_posts?.returning[0]?.id

        if (id) {
          setIsUnpaused(true)
          setIsPaused(false)
          router.replace(router.asPath)
          enqueueSnackbar('Post was unpaused!', {
            variant: 'success',
          })
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
  // , [post.alt_id, router])/
  // eslint-disable-line react-hooks/exhaustive-deps

  let [flattenTags, setFlattenTags] = useState<any>({})
  useEffect(() => {
    if (post.tags) {
      setFlattenTags(flatten(post.tags))
    }
    if (post?.post_attribute) {
      setFlattenTags(flatten(post.post_attribute.possible_value))
    }
  }, [post]) // eslint-disable-line react-hooks/exhaustive-deps

  async function sendMsgToChat() {
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
            user_id: postUser.id,
            my_id: user?.id,
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

  function sendToLogin() {
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

  return (
    <div ref={postCardRef} style={{ height: '100%' }}>
      <div
        className={`${styles.postCard} ${
          styles[`postCard__mode-${mode}`]
        } ${pageName}`}
      >
        {[1, 2, 3, 9, 10].includes(post.promotion_status as any) ? (
          <div className={`${styles[`postCard__promotionStatus__MINI`]}`}>
            {post.promotion_status === 1 ? (
              <>
                <Image
                  alt="SponsorImg"
                  src={SponsorImg}
                  width={75}
                  height={90}
                />
                <div className={styles.postCard_badge_sponsored}>
                  <span>SPONSORED</span>
                </div>
              </>
            ) : post.promotion_status === 2 ? (
              <>
                <Image
                  alt="SubscribeImg"
                  src={SubscribeImg}
                  width={75}
                  height={90}
                />
                <div className={styles.postCard_badge_subscribed}>
                  <span>SUBSCRIBE</span>
                </div>
              </>
            ) : post.promotion_status === 3 ? (
              <>
                <Image
                  alt="NationalImg"
                  src={NationalImg}
                  width={75}
                  height={90}
                />
                <div className={styles.postCard_badge_national}>
                  <span>NATIONAL</span>
                </div>
              </>
            ) : post.promotion_status === 9 ? (
              <>
                <label className={styles.postCard_badge_paused}>PAUSED</label>
              </>
            ) : post.promotion_status === 10 ? (
              <>
                <label className={styles.postCard_badge_inactive}>
                  INACTIVE
                </label>
              </>
            ) : (
              ''
            )}
          </div>
        ) : null}
        <Grid container>
          <Grid xs={mode === 'MINI' ? 12 : 10}>
            <Link
              href={`/post/${post.title
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-')}/${post.alt_id}`}
              variant="body2"
              color="primary"
              style={mode === 'MINI' ? {} : { fontWeight: 'bold' }}
            >
              <div
                className={clsx(
                  `${styles.postCard__bottomRow}`,
                  `${styles.postCard_sellerDetail}`,
                  `${styles.postCard_sellerDetail_Edit}`
                )}
              >
                <div
                  className={styles.postCard__bottomRowInfo}
                  style={{
                    width: '100%',
                  }}
                >
                  <Box display="flex">
                    {pageName === 'post-list' && (
                      <Box>
                        <NextLink href={`/seller/${postUser.alt_id}`} passHref>
                          {postUser.avatar?.url ? (
                            <Image
                              className={styles.postCard__avatar}
                              alt={`${postUser.full_name}'s Avatar`}
                              src={postUser.avatar?.url}
                              layout="fixed"
                              height={110}
                              width={110}
                              sizes="56px"
                              objectFit="cover"
                              priority
                            />
                          ) : (
                            <div
                              className={styles.avatar}
                              style={{ backgroundColor: getRandomColor() }}
                            >
                              {getInitials(
                                postUser.is_privacy_enabled
                                  ? postUser.full_name
                                  : postUser.business_name
                              )}
                            </div>
                          )}
                        </NextLink>
                      </Box>
                    )}

                    <Box ml={2}>
                      {(pageName == 'seller-detail' ||
                        pageName == 'seller-post' ||
                        pageName == 'post-list') && (
                        <Box display="flex" justifyContent="space-between">
                          <Box>
                            <Link
                              href={`/seller/${postUser.alt_id}`}
                              variant="h3"
                              style={
                                mode === 'MINI'
                                  ? {}
                                  : {
                                      fontWeight: '400',
                                      color: 'black',
                                      width: titleWidth,
                                      wordwrap: 'breakword',
                                    }
                              }
                            >
                             
                              {pageName == 'seller-post' ||
                              (pageName !== 'seller-detail' &&
                                pageName !== 'post-list')
                                ? post.title
                                : postUser.is_privacy_enabled
                                ? postUser.full_name
                                : postUser.business_name
                                ? postUser.business_name
                                : postUser.full_name}
                            </Link>{' '}
                          </Box>
                        </Box>
                      )}

                      <div className={styles.postCard__location_price_wrapper}>
                        <div className={styles.postCard__location_wrapper}>
                          <div
                            className={styles.postCard__location_svg_wrapper}
                          >
                            <LocationIcon />
                          </div>
                          <Typography variant="body2" color="textSecondary">
                            <span className={styles.postCard__colorText}>
                              {postUser.zip_code.city.name},{' '}
                              {post.user.zip_code.city.state_code}
                            </span>
                          </Typography>
                        </div>

                        {post.price_range && (
                          <Box
                            mr={3}
                            className={styles.postCard__price_wrapper}
                          >
                            <div className={styles.postCard__price_svg_wrapper}>
                              <DollarIcon />
                            </div>

                            <Typography variant="body2" color="textSecondary">
                              {!post.price_range ? (
                                <span className={styles.postCard__colorText}>
                                  n/a
                                </span>
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
                          </Box>
                        )}
                      </div>
                      <Box
                        display="flex"
                        justifyContent="baseline"
                        flexWrap="wrap"
                        className={styles.postCard__category}
                      >
                        <div className={styles.postCard__price_svg_wrapper}>
                          <CategoryIcon />
                        </div>

                        <Box pt={0.5}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            className={styles.postCard__category_text}
                          >
                            {'\u00a0'}{' '}
                            {post.category_name ??
                              '\u00a0' + post.sub_category?.category?.name}
                          </Typography>
                        </Box>
                        <Box pt={0.5}>
                          <ChevronRightIcon fontSize="small" />
                        </Box>
                        <Box pt={0.5} pr={4}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            className={styles.postCard__category_text}
                          >
                            {post.sub_category_name ?? post.sub_category?.name}
                          </Typography>
                        </Box>

                        {Object.keys(possibleAttributes).length > 0 && (
                          <div className={styles.postCard__price_svg_wrapper}>
                            <BusinessCenterIcon />
                          </div>
                        )}

                        {Object.keys(possibleAttributes).map((key, idx) => (
                          <Box pt={0.5}>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              className={styles.postCard__category_text}
                              key={key}
                            >
                              {(idx > 0 ? '|\u00a0' : '\u00a0\u00a0') +
                                key +
                                '\u00a0\u00a0'}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Box display="flex" flexWrap="wrap">
                      {Object.keys(flattenTags)
                        ?.slice(0, pageName === 'post-list' ? 6 : 50)
                        .map((key) => (
                          <div key={key}>
                            {typeof flattenTags[key] === 'string' ? (
                              <ChipStyle key={key} label={flattenTags[key]} />
                            ) : null}

                            {typeof flattenTags[key] === 'boolean' ? (
                              <ChipStyle key={key} label={getValueOfTag(key)} />
                            ) : null}
                          </div>
                        ))}
                    </Box>
                  </Box>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={2}>
            {mode === 'OWNER' && (
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={handleOpenMenu}
                  color="primary"
                  className={classes.iconButton}
                >
                  {isMenuOpened ? <Close /> : <MoreVertIcon />}
                </IconButton>

                <Menu
                  keepMounted
                  anchorEl={menuEl}
                  open={isMenuOpened}
                  onClose={handleCloseMenu}
                  style={{
                    cursor: 'pointer',
                  }}
                  PaperProps={{
                    style: {
                      width: '20ch',
                      marginTop: '1rem',
                    },
                  }}
                >
                  {enablePayment && (
                    <NextLink href={`/post/payment/${post.alt_id}`}>
                      <MenuItem
                        className={classes.manageSubscriptions}
                        onClick={handleCloseMenu}
                      >
                        <Box display="flex">
                          <DollarIcon />
                          <Typography style={{ paddingLeft: 4 }}>
                            Subscription
                          </Typography>
                        </Box>
                      </MenuItem>
                    </NextLink>
                  )}
                  <NextLink href={`/post/edit/${post.alt_id}`}>
                    <MenuItem
                      className={classes.editPost}
                      onClick={handleCloseMenu}
                    >
                      <Box display="flex">
                        <EditIcon />
                        <Typography style={{ paddingLeft: 4 }}>Edit</Typography>
                      </Box>
                    </MenuItem>
                  </NextLink>

                  {post.promotion_status > 3 && post.promotion_status !== 10 && (
                    <MenuItem
                      className={classes.pausePost}
                      onClick={() => {
                        handleCloseMenu()
                        handlePauseOpen()
                        // {
                        //   post.promotion_status === 9
                        //     ? handleUnpause()
                        //     : handlePause()
                        // }
                      }}
                    >
                      <Box display="flex">
                        {post.promotion_status === 9 ? (
                          <PauseIcon sx={{ fontSize: 25 }}></PauseIcon>
                        ) : (
                          <PlayArrowIcon sx={{ fontSize: 25 }}></PlayArrowIcon>
                        )}

                        <Typography style={{ paddingLeft: 4 }}>
                          {post.promotion_status === 9 ? 'Un-Pause' : 'Pause'}
                        </Typography>
                      </Box>
                    </MenuItem>
                  )}

                  {post.promotion_status != 8 && (
                    <Dialog
                      open={open1}
                      className={styles.pauseDialog}
                      onClose={() => {
                        setOpen1(false)
                      }}
                    >
                      <DialogContent className={styles.pauseDialog__content}>
                        <DialogContentText
                          id="alert-dialog-description"
                          className={styles.pauseDialog__text}
                        >
                          Are you sure you want to{' '}
                          {post.promotion_status === 9 ? 'un-pause' : 'pause'}{' '}
                          this post?
                        </DialogContentText>
                      </DialogContent>

                      <DialogActions className={styles.pauseDialog__actions}>
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
                          {post.promotion_status === 9 ? 'Un-Pause' : 'Pause'}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  )}

                  {post.promotion_status > 3 && post.promotion_status != 8 && (
                    <MenuItem
                      className={classes.deletePost}
                      onClick={() => {
                        handleDeleteOpen()
                        handleCloseMenu()
                      }}
                    >
                      <Box display="flex">
                        <TrashIcon />
                        <Typography style={{ paddingLeft: 4 }}>
                          Delete
                        </Typography>
                      </Box>
                    </MenuItem>
                  )}

                  <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this post?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
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
                </Menu>
              </Box>
            )}
          </Grid>
        </Grid>

        <Divider />
        <div className={styles.postCard__content}>
          <div className={styles.postCard__topRow}>
            <Link
              href={`/post/${post.title
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-')}/${post.alt_id}`}
              variant="body2"
              color="primary"
              style={mode === 'MINI' ? {} : { fontWeight: 'bold' }}
            >
              {pageName !== 'seller-post' && (
                <Typography
                  style={{
                    width: titleWidth,
                    wordWrap: 'break-word',
                  }}
                  color="textPrimary"
                >
                  {post.title}
                </Typography>
              )}

              {pageName !== 'post-list' && (
                <Typography
                  className={clsx(styles.postDescription, 'mb-4')}
                  color="textSecondary"
                >
                  {ReactHtmlParser(post.detail)}
                </Typography>
              )}
            </Link>

            {pageName !== 'seller-post' && mode !== 'OWNER' && (
              <>
                {postUser.public_phone ? (
                  <Link
                    href={`tel:${postUser.public_phone
                      .replace(/ /g, '')
                      .replace(/\-/g, '')}`}
                  >
                    <PhoneCallIcon /> {formatPhoneNumber(postUser.public_phone)}
                  </Link>
                ) : (
                  <span />
                )}

                {(!user || (user && postUser.id !== user.id)) &&
                  pageName !== 'seller-detail' && (
                    <div className={styles.postCard__chatmsg}>
                      <TextField
                        id="outlined-basic"
                        label="type a message"
                        variant="outlined"
                        fullWidth={true}
                        InputProps={{ className: classes.input }}
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <div
                        className={styles.postCard__chatlink}
                        onClick={user ? sendMsgToChat : sendToLogin}
                      >
                        <Image alt="chatIcon" src={chatIcon} />
                      </div>
                    </div>
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
