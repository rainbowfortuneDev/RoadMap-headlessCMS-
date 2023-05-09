import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
// import LocationIcon from '../../../assets/icons/location.svg'
import ContentLinkIcon from '../../../assets/icons/post-detail/content-link.svg'
import {
  Messages,
  useGetAltUserQuery,
  useGetMessagesForRoomSubscription,
} from '../../../generated/graphql'
import { useUser } from '../../../utils/user/user-context'
import Preloader from '../../common/preloader'
// import postDetailStyle from '../../post-detail/post-detail.module.scss'
import MessageBox from '../message-box/message-box'
import styles from './chat-convo.module.scss'

// import KeyboardArrowLeftIcon from '../../../assets/icons/_shared/post-card/KeyboardArrowLeft.svg'

import IconButton from '@mui/material/IconButton'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'

import CircularProgress from '@mui/material/CircularProgress'

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

function FileCard({ file }: any) {
  var isImage = file.type.includes('image')
  return (
    <a
      className={styles['message-attachment']}
      href={file.url}
      target="_blank"
      rel="noopener noreferrer"
      download={file.name}
    >
      <Image
        alt="Attachment"
        src={isImage ? file.url : ContentLinkIcon}
        width={isImage ? 150 : undefined}
        height={isImage ? 150 : undefined}
      />
      <Typography variant="body2" color="textSecondary">
        {file.name}
      </Typography>
    </a>
  )
}

function ChatMain({
  roomId,
  setRoomId,
  isRoomPresent,
  setIsRoomPresent,
  roomUser,
  online,
  onBackClick,
}: {
  roomId: number
  isRoomPresent: boolean
  setIsRoomPresent: (isRoomPresent: boolean) => void
  setRoomId: (roomId: number) => void
  roomUser: any
  online: Boolean
  onBackClick: () => void
}) {
  // const classes = useStyles()
  const router = useRouter()
  // const [isRoomPresent, setIsRoomPresent] = useState(roomPresent)
  // const [roomId, setRoomId] = useState(room_id)

  const { user_id } = router.query

  const { user } = useUser(true)

  const handleSubscription = (messages: Messages[] = [], response: any) => {
    return response?.messages
  }

  const [data1] = useGetAltUserQuery({
    variables: {
      user_id,
    },
  })
  const [loading, setloading] = useState(false)

  const [data, executeSubscription] = useGetMessagesForRoomSubscription(
    {
      variables: {
        room_id: roomId,
      },
    },
    handleSubscription
  )

  {
    /* siamparvez44 */
  }
  // const [data2] = useGetUserQuery({
  //  variables: {
  //    user_id: data1.data?.users[0]?.id,
  //  },
  // })

  useEffect(() => {
    executeSubscription()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId])

  return (
    <>
      {/* siamparvez44 */}
      {loading ? (
        <div
          style={{
            background: 'rgba(0,0,0,0.2)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5,
          }}
        >
          <CircularProgress
            size={50}
            sx={{
              color: 'blue',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-14px',
              marginLeft: '-14px',
              zIndex: 10,
            }}
          />
        </div>
      ) : null}
      {roomUser == null && <Preloader />}
      <div className={`${styles['chat-convo-container']}`}>
        {/*  message writing box */}
        <div>
          <MessageBox
            setParentLoading={setloading}
            isRoomPresent={isRoomPresent}
            onRoomCreate={setRoomId}
            onIsRoomPresentChange={setIsRoomPresent}
            roomId={roomId}
            receiverId={data1.data?.users[0]?.id}
          />
        </div>

        {/*message display component  */}

        {!isRoomPresent ? (
          <div className={`${styles['first-message-box']}`}>
            <p>Send your first message...</p>
          </div>
        ) : (
          <div className={`${styles['chat-convo-display']}`}>
          <p>Backend Data is {data.data} otherwise empty</p>
            {data.data?.map((message, index) => {
              const fullName =
                message.user.id !== user?.id
                  ? roomUser.user_rooms[0]?.user.full_name
                  : user?.full_name
              const businessName =
                message.user.id !== user?.id
                  ? roomUser.user_rooms[0]?.user.business_name
                  : user?.business_name

              const is_privacy_enabled =
                message.user.id !== user?.id
                  ? roomUser.user_rooms[0]?.user.is_privacy_enabled
                  : user?.is_privacy_enabled

              const avatarUrl =
                message.user.id !== user?.id
                  ? roomUser.user_rooms[0]?.user?.avatar?.url
                  : user?.avatar?.url

              return (
                <div key={index} className={`${styles['message-text']}`}>
                  <div className={`${styles['message-pic']}`}>
                    {avatarUrl ? (
                      <Image
                        className={`${styles['profile-pic']}`}
                        alt={`${fullName}'s Avatar`}
                        src={avatarUrl}
                        layout="fill"
                        priority
                      />
                    ) : (
                      <div
                        className={styles.avatar}
                        style={{ backgroundColor: getRandomColor() }}
                      >
                        {getInitials(
                          is_privacy_enabled ? fullName : businessName
                        )}
                      </div>
                    )}
                  </div>
                  <div className={styles['message-content']}>
                    <p className={styles['message-profile-name']}>
                      {message.user.id === user?.id ? 'Me' : fullName}
                    </p>
                    <div className={styles['message-string']}>
                      <p>
                        {message.is_file ? (
                          <FileCard file={message.file} />
                        ) : (
                          message.content
                        )}
                      </p>
                    </div>
                    <div className={`${styles['message-time-and-date']}`}>
                      {dayjs(message.created_at).format('MMM DD, h:m A')}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        <div className={`${styles['chat-convo-header']}`}>
          <div className={`${styles['chat-convo-header-profile']}`}>
            <div className={`${styles['chat-back-btn']}`}>
              <IconButton aria-label="ArrowLeft">
                <ArrowLeftIcon fontSize="large" onClick={onBackClick} />
              </IconButton>
            </div>
            {user_id && (
              <div className={`${styles['profile-img']}`}>
                {roomUser?.user_rooms[0]?.user?.avatar?.url ? (
                  <Image
                    className={styles.postDetail__avatar}
                    alt={`${roomUser?.user_rooms[0]?.user?.full_name}'s Avatar`}
                    src={roomUser?.user_rooms[0]?.user?.avatar?.url}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                ) : (
                  <div
                    className={styles.avatar}
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {getInitials(
                      roomUser.user_rooms[0].user.is_privacy_enabled
                        ? roomUser.user_rooms[0].user.full_name
                        : roomUser.user_rooms[0].user.business_name
                    )}
                  </div>
                )}
              </div>
            )}
            <div className={`${styles['profile-name-status']}`}>
              <span>{roomUser?.user_rooms[0]?.user?.full_name}</span>
              <span>{online ? 'Online' : 'Offline'}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatMain
