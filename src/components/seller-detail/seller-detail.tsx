import { makeStyles } from '@mui/styles'
import NextLink from 'next/link'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'

import { useMemo } from 'react'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import type { PostCardProps } from '../_shared/post-card/post-card'
import PostCard from '../_shared/post-card/post-card'
import type { SellerCardProps } from '../_shared/seller-card/seller-card'
import SellerCard from '../_shared/seller-card/seller-card'
import styles from './seller-detail.module.scss'

export type SellerDetailProps = {
  user: SellerCardProps['user']
  posts: PostCardProps['post'][]
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))

export default function SellerDetail({ user, posts }: SellerDetailProps) {
  const classes = useStyles()
  const { user: me } = useUser(true)
  const limitReached = useMemo(() => !!(posts?.length >= 3), [posts])
  return (
    <>
      <Header />
      <Container>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <SellerCard user={user} />
            </Grid>
            <Grid
              item
              xs={12}
              className={styles.sellerDetail__sellerPosts_List_wrapper}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                className={styles.sellerDetail__postby_with_newpost}
              >
                <Box>
                  <Typography
                    variant="h3"
                    component="h1"
                    className={styles.sellerDetail__sellerPosts_List_title}
                  >
                    POSTS BY{' THIS SELLER'}
                  </Typography>
                </Box>
                <Box>
                  {me?.id === user.id && !limitReached ? (
                    <NextLink href="/post/new" passHref>
                      <Button
                        startIcon={<AddIcon />}
                        variant="contained"
                        size="large"
                        color="primary"
                        className={styles.sellerDetail__newPostBtn}
                        style={{ fontWeight: '900' }}
                      >
                        New Post
                      </Button>
                    </NextLink>
                  ) : null}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {!posts.length ? (
                <Typography color="textSecondary">
                  {me?.id === user.id ? 'You' : 'This seller'} have no posts
                  yet.
                </Typography>
              ) : (
                posts.map((post) => (
                  <div className={styles.sellerDetail__postCard} key={post.id}>
                    <PostCard
                      key={post.id}
                      mode={me?.id === user.id ? 'OWNER' : 'LARGE'}
                      post={post}
                      pageName={
                        me?.id === user.id && !limitReached
                          ? 'seller-post'
                          : 'seller-detail'
                      }
                    />
                  </div>
                ))
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  )
}
