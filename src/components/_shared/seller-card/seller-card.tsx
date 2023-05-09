//mport { Button, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import PhoneCallIcon from '@mui/icons-material/Phone'
import Typography from '@mui/material/Typography'
import chatIcon from '../../../assets/icons/_shared/post-card/chat.svg'
// import Divider from '@mui/material/Divider'
import Image from 'next/image'
import NextLink from 'next/link'
// import DollarIcon from '../../../assets/icons/_shared/post-card/dollar.svg'
// import LocationIcon from '../../../assets/icons/_shared/post-card/location.svg'

import LocationIcon from '@mui/icons-material/LocationOn'

import type {
  Cities as CityType,
  Files as FileType,
  Users as UserType,
} from '../../../generated/graphql'
import { useUser } from '../../../utils/user/user-context'
import Link from '../link/link'
import styles from './seller-card.module.scss'

import { useSnackbar } from 'notistack'
import {
  useCreateRoomForUserMutation,
  useGetRoomForUserQuery,
  useSendMessageMutation,
} from '../../../generated/graphql'

export type SellerCardProps = {
  user: Pick<
    UserType,
    | 'id'
    | 'alt_id'
    | 'email'
    | 'public_contact_address'
    | 'public_phone'
    | 'full_name'
    | 'is_privacy_enabled'
    | 'business_name'
    | 'business_size'
    | 'last_seen'
  > & {
    avatar: Pick<FileType, 'url'>
    zip_code: { city: Pick<CityType, 'name' | 'state_code'> }
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      background: 'rgba(8, 68, 294, 0.07)',
      borderColor: 'rgba(8, 68, 294, 0.07)',
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

function SellerCard({ user }: SellerCardProps) {
  const { user: me, userLoading } = useUser()

  const router = useRouter()

  const classes = useStyles()
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
    enqueueSnackbar('Please Login!', {
      variant: 'error',
    })
    router.replace(`/login?continue=${encodeURIComponent(router.asPath)}`)
  }

  return (
    <>
      <div className={styles.sellerCard__upper_section}>
        <div className={styles.sellerCard__imageHolder}>
          <NextLink href={`/seller/${user.alt_id}`} passHref>
            {user.avatar?.url ? (
              <Image
                className={styles.sellerCard__avatar}
                alt={`${user.full_name}'s Avatar`}
                src={user.avatar?.url}
                layout="fixed"
                height={200}
                width={200}
                objectFit="cover"
                priority
              />
            ) : (
              <div
                className={styles.avatar}
                style={{ backgroundColor: getRandomColor() }}
              >
                {getInitials(
                  user.is_privacy_enabled ? user.full_name : user.business_name
                )}
              </div>
            )}
          </NextLink>
        </div>
        <div className={styles.sellerCard_info_section}>
          <div className={styles.sellerCard_info_section}>
            <div className={styles.sellerCard_user_info_promotion_wrapper}>
              <div className={styles.sellerCard_user_info_wrapper}>
                <Typography
                  className={styles.sellerCard_user_info_text}
                  variant="h4"
                  component="h1"
                >
                  <Link href={`/seller/${user.alt_id}`} variant="h5">
                    {user.is_privacy_enabled === true
                      ? user.full_name
                      : user.business_name
                      ? user.business_name
                      : user.full_name}
                  </Link>
                </Typography>

                {user.business_size == 'INDIVIDUAL' ||
                user.is_privacy_enabled == true ||
                !user.public_contact_address ? (
                  <Box mt={2} display="flex" justifyContent="baseline">
                    <Box className={styles.postCard__location_svg_wrapper}>
                      <LocationIcon />
                    </Box>
                    <Box ml={1} className={styles.postCard__location_wrapper}>
                      <Typography variant="body1" color="textPrimary">
                        <span className={styles.postCard__colorTextSecondary}>
                          {user.zip_code.city.name},{' '}
                          {user.zip_code.city.state_code}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    style={{ paddingBottom: 5 }}
                    mt={2}
                    display="flex"
                    justifyContent="baseline"
                  >
                    <Box className={styles.postCard__location_svg_wrapper}>
                      <LocationIcon />
                    </Box>

                    <Box ml={1} className={styles.postCard__location_wrapper}>
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
                    </Box>
                  </Box>
                )}

                {user.business_size !== 'INDIVIDUAL' && user.public_phone ? (
                  <Link
                    href={`tel:${user.public_phone
                      .replace(/ /g, '')
                      .replace(/\-/g, '')}`}
                  >
                    <PhoneCallIcon /> {formatPhoneNumber(user.public_phone)}
                  </Link>
                ) : (
                  <span />
                )}

                <div></div>

                {!userLoading && me?.id !== user?.id && (
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
                      onClick={me ? sendMsgToChat : sendToLogin}
                    >
                      <Image alt="chatIcon" src={chatIcon} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SellerCard
