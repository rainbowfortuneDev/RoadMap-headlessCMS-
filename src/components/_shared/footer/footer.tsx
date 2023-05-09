import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Link from '../link/link'
import styles from './footer.module.scss'

import { NEXT_PUBLIC_BLOG_URL, enableDonation } from '../../../utils/config'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__upper_section}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* <Grid item xs={12} sm={12} md={2} lg={1} xl={1}>
            <div className={styles.footer__logo}>
            </div>
          </Grid> */}
          <Grid item xs={12} sm={12} md={7} lg={8} xl={9}>
            <div className={styles.footer__menu_section}>
              <div className={styles.footer__bigLinks}>
                <Link
                  href={NEXT_PUBLIC_BLOG_URL || '#'}
                  noRouter
                  variant="body1"
                  sx={{ color: '#1C1C1C' }}
                >
                  Blog
                </Link>
                <Link href="/contact" noRouter variant="body1">
                  Contact
                </Link>
                {enableDonation != 'false' ? (
                  <Link
                    href={process.env.NEXT_PUBLIC_PAYPAL_DONATION_LINK || '#'}
                    variant="body1"
                  >
                    Donate
                  </Link>
                ) : null}
                <Link href="/faq" noRouter variant="body1">
                  FAQ
                </Link>
                <Link href="/terms" variant="body1">
                  Terms
                </Link>
                <Link href="/privacy" variant="body1">
                  Privacy
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
            <div className={styles.footer__contact_social_section}></div>
          </Grid>
        </Grid>
      </div>

      <div className={styles.footer__copyright}>
        <Typography variant="body2" color="textSecondary">
          2022 &copy; 1stKare.com. All rights reserved.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
