// import { InputBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'

import {
  useGetRoomForUserQuery,
  useGetRoomsListQuery,
  useGetAltUserQuery,
  useGetUserQuery,
} from '../../../generated/graphql'
import { useUser } from '../../../utils/user/user-context'
import ChatProfile from '../chat-profile/chat-profile'
import styles from './chat-sidebar.module.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 18,
    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  searchIcon: {
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // inputRoot: {
  //   color: 'inherit',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     width: '12ch',
  //     '&:focus': {
  //       width: '20ch',
  //     },
  //   },
  // },
}))

function ChatSideBar({ onPressChat }: { onPressChat?: () => void }) {
  const [searchInput, setSearchInput] = useState('')
  const [finalChats, setFinalChats] = useState([])

  const classes = useStyles()
  const { user } = useUser(true)
  const router = useRouter()

  const { user_id } = router.query

  const [data1] = useGetAltUserQuery({
    variables: {
      user_id,
    },
  })

  const [room] = useGetRoomForUserQuery({
    variables: {
      user_id: data1.data?.users[0]?.id,
      my_id: user?.id,
    },
  })

  const [peerUser] = useGetUserQuery({
    variables: {
      user_id: data1.data?.users[0]?.id,
    },
  })

  // const [rooms, setRooms] = useState<GetRoomsListQuery>()
  // get all rooms for the user
  // don't need to make it a subscriptions for now.

  const [data] = useGetRoomsListQuery({
    variables: {
      user_id: user?.id,
    },
  })

  useEffect(() => {
    if (!data.error && !data.fetching) {
      const chats = data.data?.rooms.map((item) => {
        console.log('')
        return {
          id: item.id,
          user: {
            fullName: item.user_rooms[0].user.full_name,
            businessName: item.user_rooms[0].user.business_name,
            is_privacy_enabled: item.user_rooms[0].user.is_privacy_enabled,
            avatar: item.user_rooms[0].user.avatar?.url,
            id: item.user_rooms[0].user.id,
            alt_id: item.user_rooms[0].user.alt_id,
          },
          messageDetails: {
            is_read:
              item.user_rooms[0].room.messages[0]?.user?.id === user?.id
                ? true
                : item.user_rooms[0].room.messages[0]?.is_read,

            id: item.user_rooms[0].room.messages[0]?.id,
            count: item.user_rooms[0].room.messages_aggregate.aggregate?.count,
          },
          lastMessage: {
            content:
              item.user_rooms[0].room.messages[0]?.content?.substring(0, 5) ==
              'https'
                ? 'Attachment'
                : item.user_rooms[0].room.messages[0]?.content,
            created_at: item.user_rooms[0].room.messages[0]?.created_at,
          },
        }
      })

      let filteredChats: any = chats!

      if (!room.error && !room.fetching) {
        if (!room.data?.rooms.length) {
          // the room is not created we need to emulate it in the frontend
          filteredChats?.unshift({
            user: {
              fullName: peerUser.data?.users_by_pk?.full_name,
              avatar: peerUser.data?.users_by_pk?.avatar?.url,
            },
          })
        }
      }
      // setChatRooms(filteredChats as chatRooms[])
      // finalChats = filteredChats
      setFinalChats(filteredChats)
    }
  }, [data, data1, room, peerUser])

  return (
    <>
      <div className={`${styles['sidebar-container']}`}>
        <div className={classes.root}>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />

            {searchInput ? (
              <IconButton aria-label="Clear">
                <ClearIcon onClick={(e) => setSearchInput(() => '')} />
              </IconButton>
            ) : (
              <SearchIcon />
            )}
          </div>
        </div>
        {/* add filter to remove rooms with no message */}
        {finalChats
          .sort((a: any, b: any) => {
            return (
              new Date(b.lastMessage.created_at).valueOf() -
              new Date(a.lastMessage.created_at).valueOf()
            )
          })
          ?.filter(
            (v: any, i: any, a: any) =>
              a.findIndex((t: any) => t.id === v.id) === i
          )
          .filter((value: any) => value != null)
          .filter((value: any) =>
            value.user.fullName.toLowerCase().match(searchInput.toLowerCase())
          )
          .map((value: any, key: any) => (
            <div key={key}>
              <ChatProfile onPressChat={onPressChat} value={value} />
              <hr className={`${styles['chat-profile-separator']}`} />
            </div>
          ))}
      </div>
    </>
  )
}

export default ChatSideBar
