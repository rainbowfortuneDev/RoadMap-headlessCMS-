import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Drawer from "@mui/material/Drawer"
import { useIdleTimer } from 'react-idle-timer'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  useGetRoomForUserQuery,
  useGetAltUserQuery,
  useUserOnlineSubscription,
} from '../../generated/graphql'
import { useUpdateLastSeen, useUser } from '../../utils/user/user-context'
import ChatMain from '../chat/chat-convo/chat-convo'
import ChatSideBar from '../chat/chat-sidebar/chat-sidebar'
//import ChatHeader from '../chat/message-header/message-header'
import ChatProfile from '../chat/message-profile/message-profile'
import styles from './message-detail.module.scss'
import { Hidden } from '@mui/material';

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

dayjs.extend(utc)
const refreshOnlineStatuseInterval = 5000 //ms
let refreshOnlineStatusTimeout: NodeJS.Timeout | null = null
const MessageDetail = () => {
  // const { window } = this.document.body;
  // const {window} = window();
  // const {window} = window?: () => Window;
  const router = useRouter()
  const { user_id } = router.query
  const { user } = useUser(true)

  const [isRoomPresent, setIsRoomPresent] = useState(false)
  const [roomId, setRoomId] = useState<number>()

  const [userIsOnline, setUserIsOnline] = useState(false)
  const [lastSeen, setLastSeen] = useState<any>()
  const [windowWidth, setwindowWidth] = useState(1500)
  useEffect(() => {
    function updateSize() {
      setwindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const {} = useUpdateLastSeen(user?.id)

  const handleSubscription = (oldData: any, response: any) => {
    console.log('Other user online status:', response.users_by_pk?.last_seen)
    setLastSeen(dayjs.utc(response.users_by_pk?.last_seen))
  }

  const onIdle = () => {
    console.log('user is idle')
  }

  const onActive = () => {
    console.log('user is active')
    // refreshLastSeen()
  }

  useIdleTimer({
    onIdle,
    onActive,
    // timeout: 120000, // 2 minutes
    timeout: 30000,
    debounce: 500,
  })

  const [data1] = useGetAltUserQuery({
    variables: {
      user_id,
    },
  })

  //  user_id = data1.data?.users?.id

  useUserOnlineSubscription(
    {
      variables: {
        id: data1.data?.users[0]?.id,
      },
    },
    handleSubscription
  )

  const scheduleNextRefresh = (delay: number) => {
    refreshOnlineStatusTimeout = setTimeout(() => {
      // check if the value of last_seen is less than 5 minutes
      if (!lastSeen) return
      console.log({ ls: dayjs.utc().diff(dayjs.utc(lastSeen), 'minutes') })
      if (dayjs.utc().diff(dayjs.utc(lastSeen), 'minutes') <= 2) {
        if (userIsOnline !== true) {
          setUserIsOnline(true)
        }
      } else {
        if (userIsOnline !== false) {
          setUserIsOnline(false)
        }
      }
      scheduleNextRefresh(delay)
    }, refreshOnlineStatuseInterval)
  }

  useEffect(() => {
    // const interval = setInterval(() => {
    //   // check if the value of last_seen is less than 10 minutes
    //   if (!lastSeen) return
    //   console.log({ ls: dayjs.utc().diff(dayjs.utc(lastSeen), 'minutes') })
    //   if (dayjs.utc().diff(dayjs.utc(lastSeen), 'minutes') <= 5) {
    //     setUserIsOnline(true)
    //   } else {
    //     setUserIsOnline(false)
    //   }
    // }, 60000)
    scheduleNextRefresh(refreshOnlineStatuseInterval)
    return () => {
      // clearInterval(interval)
      if (refreshOnlineStatusTimeout) {
        clearTimeout(refreshOnlineStatusTimeout)
      }
    }
  }, [lastSeen])

  const [room, refetchRoomForUser] = useGetRoomForUserQuery({
    variables: {
      user_id: data1.data?.users[0]?.id,
      my_id: user?.id,
    },
  })

  useEffect(() => {
    refetchRoomForUser()
  }, [refetchRoomForUser])

  useEffect(() => {
    if (!room.fetching && room.data?.rooms[0]?.id) {
      setRoomId(room.data?.rooms[0]?.id)
      setIsRoomPresent(true)
    }
  }, [room.fetching])
  const [isChatView, setisChatView] = useState(true)


  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    console.log("ddd");
      setMobileOpen(!mobileOpen);
  };
  const container =
    global !== undefined ? () => window.document.body : undefined;

  return (
    <div className={styles['message-layout-container']}>
      {/* TODO: set padding to 36px for large screen */}
      <div className={`${styles['message-detail-container']}`}>
         <div>
{/*          <ChatHeader online={userIsOnline} />*/}
        </div> 
          <div
            className={
              windowWidth < 768
                ? `${styles['message-detail-mobile']}`
                : `${styles['message-detail']}`
            }
          >
            <div
              className={isChatView ? `${styles['mobile-chat-mode']}` : undefined}
            >
            <ChatSideBar
                onPressChat={() => {
                  setisChatView(true)
                }}
              />
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: '240px'
                }
              }}
            >
              <ChatSideBar
                onClick={() => {alert('dd')}}
                onPressChat={handleDrawerToggle}
              />
            </Drawer>
            </div>

            {!room.data ? (
              <div className={`${styles['loading-container']}`}>
                <CircularProgress />
              </div>
            ) : (
              <div>
              {/*message-content*/}
                <ChatMain
                  onBackClick={
                    handleDrawerToggle
                    // setisChatView(false)
                  }
                  roomId={roomId!}
                  setRoomId={setRoomId}
                  isRoomPresent={isRoomPresent}
                  setIsRoomPresent={setIsRoomPresent}
                  roomUser={room?.data?.rooms[0]}
                  online={userIsOnline}
                />
              </div>
            )}

            <div className={`${styles['chat-profile-container']}`}>
  {/*          message-right*/}
              <ChatProfile online={userIsOnline} />
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default MessageDetail
