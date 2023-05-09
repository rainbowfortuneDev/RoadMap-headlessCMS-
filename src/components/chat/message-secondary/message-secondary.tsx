// import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { InputBase } from '@mui/material'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

import IconButton from '@mui/material/IconButton'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopySharp'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import styles from './message-secondary.module.scss'
import {
  useCreateRoomForUserMutation,
  useGetAltUserQuery,
  useSendMessageMutation,
} from '../../../generated/graphql'
import { useUser } from '../../../utils/user/user-context'
//  todo remove for prod
function ChatSecondary(props: any) {
  const router = useRouter()
  const { user_id } = router.query
  const { user } = useUser(true)
  const [newMessage, setNewMessage] = useState('')
  const [{ error: _SendMessageError }, sendMessage] = useSendMessageMutation()
  const [{ error: _CreateRoomError }, createRoom] =
    useCreateRoomForUserMutation()
  // there is no room
  const [data1] = useGetAltUserQuery({
    variables: {
      user_id,
    },
  })
  const handleSendMessage = async () => {
    if (!newMessage) {
      return
    }
    //  user_id = data1.data?.users?.id
    if (data1.data?.users[0]?.id === user?.id) {
      return
    }
    // create the room
    const room = await createRoom({
      user_id: data1.data?.users[0]?.id,
      my_id: user?.id,
    })

    await sendMessage({
      content: newMessage,
      user_id: user?.id,
      room_id: room.data?.insert_rooms?.returning[0].id,
    })

    // call the parent component function to let is know that the room has been created
    props.setRoomPreset(room.data?.insert_rooms?.returning[0].id)
    setNewMessage('')
  }

  return (
    <>
      <div className={`${styles['wrapper']}`}>
        {/*  message writing box */}
        <div className={`${styles['message-box']}`}>
          <Paper className={styles['message-input']} variant="outlined">
            <InputBase
              className={styles['input']}
              onChange={(e: any) => setNewMessage(e.target.value)}
              value={newMessage}
            />
            <IconButton type="submit" aria-label="search">
              <FileCopyOutlinedIcon />
            </IconButton>
            <Divider className={styles['divider']} orientation="vertical" />
            <IconButton color="primary" aria-label="directions">
              <CameraAltOutlinedIcon />
            </IconButton>
          </Paper>
          <Button
            variant="contained"
            style={{ marginRight: '5%' }}
            onClick={handleSendMessage}
          >
            <SendOutlinedIcon />
          </Button>
        </div>
        {/*message display component  */}
        <div className={styles['message-area']}></div>
      </div>
    </>
  )
}
export default ChatSecondary
