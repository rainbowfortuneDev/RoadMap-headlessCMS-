import NextLink from 'next/link'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useCity } from '../../utils/city/city-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './donate-success.module.scss'

type DonateSuccessProps = unknown

function DonateSuccess(_: DonateSuccessProps) {
  const { zipAndCity } = useCity()

  return (
    <>
      <Header />

      <main className={styles.donateSuccess}>
        <div className={styles.donateSuccess__paper}>
          <Typography variant="h4">🙏</Typography>
          <Typography variant="h4">Thank You for Donating!</Typography>

          <Typography variant="body2" color="textSecondary">
            We&#39;re so happy you&#39;re choosing to support us.
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
              Donate again
            </Button>
          </NextLink>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default DonateSuccess
