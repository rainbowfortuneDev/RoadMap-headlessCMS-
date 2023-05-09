import Tooltip from '@mui/material/Tooltip'
// import TextareaAutosize from '@mui/base/TextareaAutosize'
import { TextareaAutosize } from '@mui/material'
// import TextareaAutosize from '@mui/base/TextareaAutosize';
import Box from '@mui/material/Box'

import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import AttachFileOutlined from '@mui/icons-material/AttachFileOutlined'
import SendIcon from '@mui/icons-material/Send'
import { DropzoneDialog } from 'react-mui-dropzone'
import React, { useEffect, useState } from 'react'
import {
  useCreateRoomForUserMutation,
  useSendMessageMutation,
} from '../../../generated/graphql'
import { upload } from '../../../utils/object-storage/upload'
import { useUser } from '../../../utils/user/user-context'
import styles from './message-box.module.scss'

import { FILE_UPLOAD_SIZE } from '../../../utils/config'
import { useSnackbar } from 'notistack'
// import { green } from '@mui/material/colors';

const sizeInMB = FILE_UPLOAD_SIZE * 1024 * 1024

type MessageBoxType = {
  receiverId: number | string | string[] | undefined
  roomId?: number
  isRoomPresent: boolean
  onRoomCreate: (roomId: number) => void
  onIsRoomPresentChange: (isRoomPresent: boolean) => void
  setParentLoading: (v: boolean) => void
}
const MessageBox = ({
  receiverId,
  roomId,
  isRoomPresent,
  onIsRoomPresentChange,
  onRoomCreate,
  setParentLoading,
}: MessageBoxType) => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [fileUploading, setFileUploading] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [{}, sendMessage] = useSendMessageMutation()
  const { enqueueSnackbar } = useSnackbar()
  const [{}, createRoom] = useCreateRoomForUserMutation()
  const { user, auth } = useUser(true)

  const onEnter = async (e: any) => {
    if ((e.key === 'Enter' || e.keyCode === 13) && e.ctrlKey) {
      await handleSendMessage()
    }
  }
  useEffect(() => {
    setParentLoading(fileUploading)
  }, [fileUploading])

  const handleFileUpload = async (files: any) => {
    setFileUploading(true)
    const file = files[0]
    const token = auth.idToken?.token
    if (!file || !token) {
      return
    }
    try {
      const uploadedFile = await upload(file, token)

      let room: any

      if (!isRoomPresent) {
        // create the room
        room = await createRoom({
          user_id: receiverId,
          my_id: user?.id,
        })
      }

      await sendMessage({
        content: uploadedFile.file.url,
        user_id: user?.id,
        room_id: roomId || room?.data?.insert_rooms?.returning[0].id,
        is_file: true,
        file_id: uploadedFile.file.id,
      })

      if (room) {
        onIsRoomPresentChange(true)
        onRoomCreate(room.data?.insert_rooms?.returning[0].id)
      }
    } catch (e) {
      enqueueSnackbar('Upload failed!', {
        variant: 'error',
      })
    }

    setFileUploading(false)
  }

  const handleSendMessage = async () => {
    if (!newMessage && newMessage.trim().length === 0) {
      return
    }
    if (receiverId === user?.id) {
      return
    }
    let room: any

    if (!isRoomPresent) {
      // create the room
      room = await createRoom({
        user_id: receiverId,
        my_id: user?.id,
      })
    }

    await sendMessage({
      content: newMessage,
      user_id: user?.id,
      room_id: roomId || room?.data?.insert_rooms?.returning[0].id,
    })

    if (room) {
      onIsRoomPresentChange(true)
      onRoomCreate(room.data?.insert_rooms?.returning[0].id)
    }
    setNewMessage('')
  }

  return (
    <div className={`${styles['message-box']}`}>
      {/* siamparvez44 */}
      <DropzoneDialog
        open={isUploadDialogOpen}
        onSave={(files) => {
          handleFileUpload(files)
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
        previewGridProps={{
          container: { xs: 12 },
          item: { xs: 12 },
        }}
        maxFileSize={sizeInMB}
        onClose={() => setIsUploadDialogOpen(false)}
        submitButtonText="Upload"
      />

      <Paper className={`${styles['message-input-box']}`} variant="elevation">
        <TextareaAutosize
          className={`${styles['message-input']}`}
          style={{ width: '80%' }}
          maxRows={5}
          minRows={1}
          aria-label="message box"
          placeholder="Write message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={onEnter}
        />
      </Paper>

      <div className={styles['message-box-action-buttons']}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <IconButton
            type="submit"
            aria-label="search"
            disabled={fileUploading}
          >
            <Tooltip
              style={{}}
              title={'Max ' + FILE_UPLOAD_SIZE + 'MB'}
              followCursor
              placement="top"
              arrow
            >
              <AttachFileOutlined
                style={{ fontSize: '24px' }}
                onClick={() => setIsUploadDialogOpen(true)}
              />
            </Tooltip>
          </IconButton>

          {/* {fileUploading && (
              <CircularProgress  size={28}
              sx={{
                color:'gray',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-14px',
                marginLeft: '-14px',
              }} />
            )}  */}
        </Box>

        <Paper className={`${styles['message-action-box-send']}`}>
          <IconButton type="submit" aria-label="search">
            <Tooltip
              title={
                newMessage.trim().length === 0
                  ? 'Please write a message to send'
                  : ''
              }
              arrow
            >
              <SendIcon onClick={handleSendMessage} />
            </Tooltip>
          </IconButton>
        </Paper>
      </div>
    </div>
  )
}

export default MessageBox
