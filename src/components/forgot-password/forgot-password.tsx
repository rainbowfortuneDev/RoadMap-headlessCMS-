import Image from 'next/image'
import NextLink from 'next/link'
import { useCallback, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { makeStyles } from '@mui/styles'

import LogoAsset from '../../assets/images/_shared/logo.png'
import { theme } from '../../styles/theme'
import useLogout from '../../utils/auth/use-logout'
import { useCity } from '../../utils/city/city-context'
import { getAuth } from '../../utils/firebase/firebase-app'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'

type ForgotPasswordProps = unknown

const useStyles = makeStyles({
  root: {
    display: 'grid',
    alignItems: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
    minHeight: `calc(100vh - 72px)`,
  },
  paper: {
    padding: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
    },
  },
  centerText: {
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
})

function ForgotPassword(props: ForgotPasswordProps) {
  const { user, userLoading } = useUser()
  const logout = useLogout()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const [email, setEmail] = useState('')

  const [isSent, setIsSent] = useState(false)

  const sendPasswordResetEmail = useCallback(() => {
    setLoading(true)
    setError(null)
    getAuth()
      .sendPasswordResetEmail(email)
      .then(() => setIsSent(true))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [email, setError, setLoading])

  const { zipAndCity } = useCity()

  const classes = useStyles(props)

  return (
    <>
      <Header />

      <Container className={classes.root} maxWidth="xs">
        <Paper className={classes.paper} elevation={7}>
          {userLoading || loading ? (
            <div className={classes.centerText}>
              <CircularProgress />
            </div>
          ) : user ? (
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="body1" component="div">
                  You are already logged in.
                </Typography>
              </Grid>

              <Grid item>
                <NextLink
                  href={zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/'}
                >
                  <Button
                    className={classes.fullWidth}
                    color="primary"
                    size="large"
                    variant="contained"
                  >
                    Go home
                  </Button>
                </NextLink>
              </Grid>

              <Grid item>
                <Button
                  className={classes.fullWidth}
                  color="primary"
                  size="large"
                  variant="outlined"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          ) : isSent ? (
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5" component="h1">
                  We&apos;ve sent you a password reset link!
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="h1">
                  Please check your email&apos;s inbox for instructions.
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <>
              <form method="POST" action="#" onSubmit={sendPasswordResetEmail}>
                <Grid container direction="column" spacing={2}>
                  <Grid item className={classes.centerText}>
                    <Image
                      alt="1stKare Logo"
                      src={LogoAsset}
                      placeholder="blur"
                      layout="fixed"
                      height={80}
                      width={80}
                      sizes="80px"
                      priority
                      objectFit="contain"
                    />
                  </Grid>

                  <Grid item className={classes.centerText}>
                    <Typography variant="h5" component="h1">
                      Reset Your Password
                    </Typography>
                  </Grid>

                  <Grid item>
                    <FormControl fullWidth>
                      <TextField
                        type="email"
                        label="Email"
                        aria-label="Email"
                        size="medium"
                        variant="outlined"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1" component="div">
                      <Link href="/login">Login instead</Link>
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Button
                      className={classes.fullWidth}
                      type="submit"
                      color="primary"
                      size="large"
                      variant="contained"
                    >
                      Continue
                    </Button>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1" component="div">
                      Don&apos;t have an account?{' '}
                      <Link href="/sign-up">Sign up</Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>

              {!error?.message ? null : (
                <>
                  <Divider className={classes.divider} />

                  <Typography variant="body2" color="error" component="div">
                    {error?.message}
                  </Typography>
                </>
              )}
            </>
          )}
        </Paper>
      </Container>

      <Footer />
    </>
  )
}

export default ForgotPassword
