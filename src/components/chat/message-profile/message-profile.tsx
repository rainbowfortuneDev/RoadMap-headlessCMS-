import Image from 'next/image'
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'
// import clsx from 'clsx'
// import Link from '../../_shared/link/link'
// import { ChevronRight } from 'react-feather'

// todo remove in prod
import { useGetUserQuery, useGetAltUserQuery } from '../../../generated/graphql'
import styles from './message-profile.module.scss'

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

function ChatProfile(props: { online: Boolean }) {
  const router = useRouter()
  const { user_id } = router.query

  const [data1] = useGetAltUserQuery({
    variables: {
      user_id,
    },
  })
  const [data] = useGetUserQuery({
    variables: {
      user_id: data1.data?.users[0]?.id,
    },
  })
// console.log(""+data.data?.users_by_pk?.avatar?.url);
  return (
    <>
      <div className={`${styles['message-profile-container']}`}>
      { data.data && ( 
        <div className={`${styles['basic-info-box']}`}>
          {data.data?.users_by_pk?.avatar?.url ? (
            <Image
              alt={`${data.data?.users_by_pk?.full_name}'s Avatar`}
              src={data.data?.users_by_pk?.avatar?.url}
              height={100}
              width={100}
              priority
            />
          ) : (
            <div
              className={styles.avatar}
              style={{ backgroundColor: "green" }}
            >
              {data.data?.users_by_pk?.full_name &&
              data.data?.users_by_pk?.is_privacy_enabled
                ? getInitials(data.data?.users_by_pk?.full_name)
                : data.data?.users_by_pk?.business_name &&
                  getInitials(data.data?.users_by_pk?.business_name)}
            </div>
          )}

          <span className={`${styles['full-name']}`}>
            {data.data?.users_by_pk?.full_name}
          </span>

          <span className={`${styles['profile-location-text']}`}>
            {data.data?.users_by_pk?.zip_code.city.name},{' '}
            {data.data?.users_by_pk?.zip_code.city.state_code}
          </span>

          <span className={`${styles['status']}`}>
            {props.online ? 'Online' : 'Offline'}
          </span>
        </div>
      )}
        {/* siamparvez44 */}
        {/* todo: need to fix displaying category and sub category of the post */}
        {/* <div className={clsx(styles.postDetail__postCategory, 'mb-4')}>
          <p>
            {data.data?.users_by_pk?.posts[0]?.sub_category?.category?.name} `
            {'>'}`{data.data?.users_by_pk?.posts[0]?.sub_category?.name}
          </p>
          <p>
            {data.data?.users_by_pk?.posts[1]?.sub_category?.category?.name} `
            {'>'}`{data.data?.users_by_pk?.posts[1]?.sub_category?.name}
          </p>
          <p>
            {data.data?.users_by_pk?.posts[2]?.sub_category?.category?.name} `
            {'>'}`{data.data?.users_by_pk?.posts[2]?.sub_category?.name}
          </p>
        </div> */}

        {/* TODO: handle logic here */}
        {/* <div className={`${styles['request-info']}`}>
          <p>
            [Client name] is asking for contact details. Lets chat and decide
          </p>
          <Button variant="contained" color="primary" size="large">
            Allow client
          </Button>
          <Button variant="outlined" size="large">
            Decline
          </Button>
        </div> */}
      </div>
    </>
  )
}

export default ChatProfile
