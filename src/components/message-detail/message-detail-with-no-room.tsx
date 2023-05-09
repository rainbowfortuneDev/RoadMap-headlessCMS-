//import { Typography } from '@mui/material'

import Typography from '@mui/material/Typography'

import ChatSideBar from '../chat/chat-sidebar/chat-sidebar'
//import ChatHeader from '../chat/message-header/message-header'
import styles from './message-detail.module.scss'
import ChatIcon from '@mui/icons-material/Chat'
import { useEffect, useState } from 'react'

const MessageDetailWithNoRoom = () => {
  const [windowWidth, setwindowWidth] = useState(1500)

  useEffect(() => {
    function updateSize() {
      setwindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return (
    <div className={styles['message-layout-container']}>
      {/* TODO: set padding to 36px for large screen */}
      <div className={`${styles['message-detail-container']}`}>
        {/* <div>
          <ChatHeader online={false} noRoom={true} />
        </div> */}
        <div
          className={
            windowWidth < 768
              ? `${styles['message-detail-mobile']}`
              : `${styles['message-detail']}`
          }
        >
          <ChatSideBar />
          <div
            className={`${styles['no-room']}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <ChatIcon color="primary" style={{ fontSize: '3rem' }} />
            <Typography variant="h5" color="textSecondary">
              Select a conversation
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Try selecting a conversation or searching for someone specific
            </Typography>
          </div>
          <div className={`${styles['no-room']}`}></div>
          <div className={`${styles['chat-profile-container']}`} />
        </div>
      </div>
    </div>
  )
}

export default MessageDetailWithNoRoom
