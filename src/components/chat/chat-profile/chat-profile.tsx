import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'

import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined'
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined'
import { useUpdateMessagesMutation } from '../../../generated/graphql'
import styles from './chat-profile.module.scss'

type ChatProfileType = {
  value: any
  onPressChat?: () => void
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

const ChatProfile = ({ value, onPressChat }: ChatProfileType) => {
  const router = useRouter()
  const [{}, updateMessages] = useUpdateMessagesMutation()
  return (
    <div
      className={`${styles.profile} ${
        router.query &&
        router.query.user_id &&
        router.query.user_id == value.user.alt_id &&
        styles.profile__active
      }`}
      onClick={async function () {
        // console.log (value.messageDetails)

        if (value.messageDetails?.is_read == false) {
          try {
            await updateMessages({
              user_id: value.user?.id,
              is_read: true,
            })
          } catch (err) {}
        }
        if (value.user.alt_id) {
          router.push(`/message/${value.user.alt_id}`)
        }
        return undefined
      }}
    >
      <div>
        <div className={`${styles.profile__img}`}>
          {value.user?.avatar ? (
            <Image
              className={styles.postDetail__avatar}
              alt={`${value.user.fullName}'s Avatar`}
              src={value.user?.avatar}
              layout="fill"
              priority
            />
          ) : (
            <div
              className={styles.avatar}
              style={{ backgroundColor: getRandomColor() }}
            >
              {getInitials(
                value.user.is_privacy_enabled
                  ? value.user.fullName
                  : value.user.businessName
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.profile__info}>
        <span className={styles.profile__name}>{value.user?.fullName}</span>
        <div className={styles.profile__room}>
          <span className={styles.profile__message}>
            {value.lastMessage?.content}
          </span>
          {value.messageDetails?.is_read && (
            <div className={styles.profile__is__read}>
              <MarkAsUnreadOutlinedIcon />
            </div>
          )}

          {!value.messageDetails?.is_read && (
            <div className={styles.profile__is__unread}>
              <span
                className={styles.message__unread__count}
                style={{ backgroundColor: '#90EE91' }}
              >
                {value.messageDetails?.count}
              </span>
              <MarkunreadOutlinedIcon />
            </div>
          )}
        </div>
        <div className={styles.profile__lastDay}>
          {dayjs(value.lastMessage?.created_at).format('MM/DD/YY')}
        </div>
      </div>
    </div>
  )
}

export default ChatProfile
