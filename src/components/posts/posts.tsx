import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

import { makeStyles } from '@mui/styles'
//import 'antd/dist/antd.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { theme } from '../../styles/theme'
import { useCity } from '../../utils/city/city-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import type { PostCardProps } from '../_shared/post-card/post-card'
import PostCard from '../_shared/post-card/post-card'
import PostsFilters from './posts-filters'
import styles from './posts.module.scss'
import Collapse from '@mui/material/Collapse'
// import Image from 'next/image'

import IconButton from '@mui/material/IconButton'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { useAtom } from 'jotai'
import { filterAtom } from '../../atoms/filterAtom'
// import { keywordAtom } from '../../atoms/keywordAtom'
// import { postListAtom } from '../../atoms/postListAtom'

//@ts-ignore
// import flatten from 'flat'

export type PostsProps = {
  city_alt_id: string
  lat: string
  longitude: string
  q: string
  page: number
  result_posts_count: number
  result_posts: PostCardProps['post'][]
  categoryDetails: any
  setFilterText: any
}

const useStyles = makeStyles({
  filtersContainerOnDesktop: {
    [theme.breakpoints.down(721)]: {
      display: 'none',
    },
    margin: theme.spacing(1),
  },
  filtersContainerOnMobile: {
    display: 'none',

    paddingTop: theme.spacing(2),

    [theme.breakpoints.down(721)]: {
      display: 'initial',
    },
  },
  filtersContainerHiddenOnMobile: {
    display: 'none',
  },
  searchForm: {
    display: 'grid',

    gap: 8,
    gridTemplateColumns: '1fr 0',

    [theme.breakpoints.down(721)]: {
      gridTemplateColumns: '56px 1fr 0',
    },
  },
  filtersButton: {
    display: 'none',

    padding: '4px 0 0',

    // minWidth: 56,
    // width: 56,
    // height: 56,

    [theme.breakpoints.down(721)]: {
      display: 'initial',
    },
  },
  searchField: {
    marginRight: -8,

    height: 56,

    borderRadius: 4,

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[7],
  },
  searchButton: {
    marginLeft: -56,

    minWidth: 56,
    width: 56,
    height: 56,

    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  hasClearIcon: {
    marginRight: 50,
  },
  item: {
    paddingLeft: 70,
    paddingBottom: 70,
    '@media (min-width: 1280px) and (max-width: 1476px)': {
      paddingLeft: 40,
      // flexGrow: 0,
      // maxWidth: '100%',
      // flexBasis: '100%',
    },
    '@media (min-width: 320px) and (max-width: 1279px)': {
      paddingLeft: '0',
    },
    '@media (min-width: 1036px) and (max-width: 1279px)': {
      paddingLeft: '0px !important',
    },
  },
  'grid-xs-5': {
    '@media (min-width: 1280px) and (max-width: 1476px)': {
      padding: '10px !important',
    },
    '@media (min-width: 320px) and (max-width: 500px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  'grid-md-5': {
    '@media (min-width: 960px) and (max-width: 1035px)': {
      flexGrow: 0,
      maxWidth: '100%',
      flexBasis: '100%',
    },
  },
})

function Posts(props: PostsProps) {
  const router = useRouter()
  const { zipAndCity } = useCity()

  const classes = useStyles()

  // const sortNullishValues = (arr: any = []) => {
  //   const assignValue = (val: any) => {
  //     if (val === null) {
  //       return Infinity
  //     } else {
  //       return val
  //     }
  //   }
  //   const sorter = (a: any, b: any) => {
  //     return assignValue(a.promotion_status) - assignValue(b.promotion_status)
  //   }
  //   arr.sort(sorter)
  // }

  useEffect(() => {
  
  console.log('useEffect1')
  
    if (!props.city_alt_id || !zipAndCity) {
      router.push('/')
    } else if (props.city_alt_id !== zipAndCity.city.alt_id) {
      router.push(
        `/posts/${zipAndCity.city.name.toLowerCase()}-${zipAndCity.city.state_code.toLowerCase()}/${
          zipAndCity.city.alt_id
        }/${zipAndCity.latitude}/${zipAndCity.longitude}/${encodeURIComponent(
          props.q.toLowerCase()
        )}/1`
      )
    }
  }, [
    zipAndCity,
    props.city_alt_id,
    props.lat,
    props.longitude,
    props.q,
    router,
  ])

  let [filterText, setFilterText] = useAtom(filterAtom)
  // let [keyword] = useAtom(keywordAtom)
  let [filteredResults, setFilteredResults] = useState<PostCardProps['post'][]>(
    []
  )

  useEffect(() => {
  console.log('useEffect2')
  
    setFilterText('')
  }, [props.q])

  useEffect(() => {
  
  console.log('useEffect3')
  
    setFilteredResults(props.result_posts)
  }, [props.result_posts])

  // const searchTag = null

  useEffect(() => {
  
  console.log('useEffect4')
  
    // sortNullishValues(props.result_posts)

    if (filterText !== '') {
      // var filts = filterText.split('/')

      if (zipAndCity) {
        router.push(
          `/posts/${zipAndCity.city.name.toLowerCase()}-${zipAndCity.city.state_code.toLowerCase()}/${
            zipAndCity.city.alt_id
          }/${zipAndCity.latitude}/${zipAndCity.longitude}/${encodeURIComponent(
            filterText
          )}/1`
        )
      }

      // setFilteredResults(filterJSON(props.result_posts, strippedText))
    }
  }, [filterText])

  if (!props.city_alt_id || !zipAndCity) {
    return null
  }

  const [filterVisibility, setFilterVisibility] = useState<boolean>(true)
  // @ts-ignore
  const [middleSize, setMiddleSize] = useState<number>(10)
  const onClickFilter = () => {
    if (filterVisibility) setTimeout(() => setMiddleSize(12), 400)
    else setTimeout(() => setMiddleSize(10), 400)
    setFilterVisibility(!filterVisibility)
  }

  return (
    <>
      <Header {...props} />
      <Box sx={{ px: 2, py: 4 }}>
        <Grid container style={{ margin: 0 }}>
          <div onClick={onClickFilter} className={styles.filterIcon}>
            {filterVisibility ? (
              <IconButton aria-label="ArrowLeft">
                <ArrowLeftIcon />
              </IconButton>
            ) : (
              <IconButton aria-label="ArrowRight">
                <ArrowRightIcon />
              </IconButton>
            )}
          </div>
          <Collapse in={filterVisibility} orientation="horizontal">
            <Grid item className={classes['grid-xs-5']}>
              <div className={classes.filtersContainerOnDesktop}>
                <PostsFilters {...props} />
              </div>
            </Grid>
          </Collapse>

          <Grid
            item
            xs={12}
            sm={13}
            md={9}
            lg
            className={clsx(`${classes['grid-xs-5']}`)}
          >
            <div className={styles.posts__content}>
              <div
                className={`${classes.filtersContainerOnMobile} ${
                  true ? classes.filtersContainerHiddenOnMobile : ''
                }`}
              >
                <PostsFilters {...props} />
              </div>

              {!filteredResults.length ? (
                <Typography color="textSecondary">
                  No posts found.
                  <br />
                  Please adjust the filters and/or your city to see more service
                  posts.
                </Typography>
              ) : (
                <Grid container spacing={1}>
                  {filteredResults.map((post) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      xl={6}
                      key={post.id}
                    >
                      <React.Fragment>
                        <PostCard
                          mode="MINI"
                          post={post}
                          pageName="post-list"
                        />
                      </React.Fragment>
                    </Grid>
                  ))}
                </Grid>
                // <div className={styles.posts__contentPostsGrid}>
                //   {filteredResults.map((post) => (
                //     <React.Fragment key={post.id}>
                //       <PostCard mode="MINI" post={post} />
                //     </React.Fragment>
                //   ))}
                // </div>
              )}

              <div style={{ margin: '32px auto' }}>
                <Pagination
                  count={Math.ceil(props.result_posts_count / 24)}
                  page={props.page}
                  onChange={(_e: any, value: any) => {
                    router.push(
                      `/posts/${zipAndCity.city.name.toLowerCase()}-${zipAndCity.city.state_code.toLowerCase()}/${
                        zipAndCity.city.alt_id
                      }/${zipAndCity.latitude}/${
                        zipAndCity.longitude
                      }/${encodeURIComponent(props.q.toLowerCase())}/${value}`
                    )
                  }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <main className={styles.posts} style={{ display: 'none' }}>
        <div className={classes.filtersContainerOnDesktop}>
          <PostsFilters {...props} />
        </div>

        <div className={styles.posts__content}>
          <div
            className={`${classes.filtersContainerOnMobile} ${
              true ? classes.filtersContainerHiddenOnMobile : ''
            }`}
          >
            <PostsFilters {...props} />
          </div>

          {!filteredResults.length ? (
            <Typography color="textSecondary">
              No posts found.
              <br />
              Please adjust the filters and/or your city to see more service
              posts.
            </Typography>
          ) : (
            <Grid container spacing={10}>
              {filteredResults.map((post) => (
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={post.id}>
                  <React.Fragment>
                    <PostCard mode="MINI" post={post} pageName="post-list" />
                  </React.Fragment>
                </Grid>
              ))}
            </Grid>
            // <div className={styles.posts__contentPostsGrid}>
            //   {filteredResults.map((post) => (
            //     <React.Fragment key={post.id}>
            //       <PostCard mode="MINI" post={post} />
            //     </React.Fragment>
            //   ))}
            // </div>
          )}

          <div style={{ margin: '0 auto' }}>
            <Pagination
              count={Math.ceil(props.result_posts_count / 24)}
              page={props.page}
              onChange={(_e: any, value: any) => {
                router.push(
                  `/posts/${zipAndCity.city.name.toLowerCase()}-${zipAndCity.city.state_code.toLowerCase()}/${
                    zipAndCity.city.alt_id
                  }/${zipAndCity.latitude}/${zipAndCity.longitude}
                  }/${encodeURIComponent(props.q.toLowerCase())}/${value}`
                )
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Posts
