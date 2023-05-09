// import { Container, Grid, Typography, Button } from '@mui/material'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { makeStyles } from '@mui/styles'
import AddIcon from '@mui/icons-material/Add'
import Image from 'next/image'
import NextLink from 'next/link'
import Avatar from '../../assets/images/city-detail/avatar.png'
import BlobImg from '../../assets/images/city-detail/blob.png'
import CityBanner from '../../assets/images/city-detail/city-banner.png'
import CityDetailHeroBgAsset from '../../assets/images/city-detail/city-detail-hero-bg.jpg'
import { useUser } from '../../utils/user/user-context'
import CategoryCard from '../_shared/category-card/category-card'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './city-detail.module.scss'

export type CityDetailProps = {
  categories: {
    id: number
    name: string
    sub_categories: {
      id: number
    }[]
  }[]
}

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#0844CC',
    borderRadius: 21,
    padding: '10px 30px',
  },
  createAccountButton: {
    backgroundColor: 'rgba(8, 68, 204, 0.1)',
    borderRadius: 17,
    color: '#0844CC',
    borderColor: 'rgba(8, 68, 204, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(8, 68, 204, 0.1)',
      color: '#0844CC',
      borderColor: 'rgba(8, 68, 204, 0.1)',
    },
  },
}))

function CityDetail({ categories }: CityDetailProps) {
  const classes = useStyles()
  const { user, userLoading } = useUser()

  return (
    <>
      <Header />
      <main className={styles.cityDetail}>
        <div className={styles.blob}>
          <Image alt="City Chooser page's background image" src={BlobImg} />
        </div>
        <Container>
          <div className={styles.cityDetail__banner_section}>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={styles.cityDetail__banner_leftSection}>
                  <h1>Discover skilled service providers near you!</h1>
                  <p>
                    Choose a category to find skilled professionals and their
                    services posted near you.
                  </p>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="d-flex align-items-center"
              >
                <Image
                  alt="City Chooser page's background image"
                  src={CityBanner}
                  width={600}
                  height={500}
                  objectFit="contain"
                />
              </Grid>
            </Grid>
          </div>
          <div className={styles.cityDetail__category_section}>
            <Grid
              container
              spacing={4}
              justifyContent="flex-start"
              alignItems="center"
            >
              {categories.map((category) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  key={category.id}
                >
                  <CategoryCard key={category.id} category={category} />
                </Grid>
              ))}
            </Grid>
          </div>
          {!userLoading && !user ? (
            <div className={styles.cityDetail__contentSignUpCard}>
              <div className={styles.cityDetail__contentSignUpCardTextSection}>
                <div className={styles.cityDetail__contentSignUpCardAvatar}>
                  <Image
                    alt="City Chooser page's background image"
                    src={Avatar}
                    width={80}
                    height={80}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <Typography variant="h4">
                    Are you a service provider?
                  </Typography>

                  <Typography variant="body1" color="textSecondary">
                    Join 1stKare and post your services, at no cost, to get
                    discovered and chat with clients.
                  </Typography>
                </div>
              </div>

              <NextLink href="/sign-up" passHref>
                <Button
                  className={classes.createAccountButton}
                  size="large"
                  color="primary"
                  variant="outlined"
                  startIcon={<AddIcon />}
                >
                  CREATE AN ACCOUNT
                </Button>
              </NextLink>
            </div>
          ) : null}
        </Container>
      </main>
      <main className={styles.cityDetail} style={{ display: 'none' }}>
        <div className={styles.cityDetail__hero}>
          <Image
            className={styles.cityDetail__heroBg}
            alt="City Chooser page's background image"
            src={CityDetailHeroBgAsset}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            priority
          />

          <div className={styles.cityDetail__heroOverlay}>
            <div>
              <div>
                <Typography variant="h1">
                  Discover skilled service providers near you!
                </Typography>

                <Typography variant="body1" style={{ opacity: 0.84 }}>
                  Choose a category to find skilled professionals and their
                  services posted near you.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cityDetail__content}>
          <div className={styles.cityDetail__contentCategoriesList}>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {!userLoading && !user ? (
            <div className={styles.cityDetail__contentSignUpCard}>
              <div className={styles.cityDetail__contentSignUpCardText}>
                <Typography variant="h4">
                  Are you a service provider?
                </Typography>

                <Typography variant="body1" color="textSecondary">
                  Join 1stKare and post your services, at no cost, to get
                  discovered and chat with clients.
                </Typography>
              </div>

              <NextLink href="/sign-up" passHref>
                <Button
                  className={styles.cityDetail__contentSignUpCardButton}
                  size="large"
                  color="primary"
                  variant="outlined"
                  startIcon={<AddIcon />}
                >
                  CREATE AN ACCOUNT
                </Button>
              </NextLink>
            </div>
          ) : null}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default CityDetail
