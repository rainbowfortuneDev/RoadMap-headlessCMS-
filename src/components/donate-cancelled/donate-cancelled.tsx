import NextLink from 'next/link'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useCity } from '../../utils/city/city-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './donate-cancelled.module.scss'

type DonateCancelledProps = unknown

function DonateCancelled(_: DonateCancelledProps) {
  const { zipAndCity } = useCity()

  return (
    <>
      <Header />

      <main className={styles.donateCancelled}>
        <div className={styles.donateCancelled__paper}>
          <Typography variant="h4">Donation cancelled.</Typography>

          <Typography variant="body2" color="textSecondary">
            You&apos;ve cancelled your donation session.
          </Typography>

          <span />

          <NextLink
            href={zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/'}
            passHref
          >
            <Button variant="contained" size="large" color="primary">
              Dicover posts
            </Button>
          </NextLink>

          <NextLink href="/donate" passHref>
            <Button variant="text" size="large" color="primary">
              Try again
            </Button>
          </NextLink>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default DonateCancelled
