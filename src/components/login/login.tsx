import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ButtonGroup from '@mui/material/ButtonGroup'
import CircularProgress from '@mui/material/CircularProgress'
import FormControl from '@mui/material/FormControl'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { makeStyles } from '@mui/styles'
import firebase from 'firebase/app'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { FormEvent } from 'react'
import { useCallback, useMemo, useState } from 'react'
import AppleIconAsset from '../../assets/icons/sign-up/apple.svg'
import FacebookIconAsset from '../../assets/icons/sign-up/facebook.svg'
import GoogleIconAsset from '../../assets/icons/sign-up/google.svg'
// import ClockImg from '../../assets/images/clock.png'
// import HandImg from '../../assets/images/hand.png'
import LogoAsset from '../../assets/images/_shared/logo.png'
import { theme } from '../../styles/theme'
import useAfterLogin from '../../utils/auth/use-after-login'
import useAfterSignUp from '../../utils/auth/use-after-sign-up'
import useLogout from '../../utils/auth/use-logout'
import { useCity } from '../../utils/city/city-context'
import { getAuth } from '../../utils/firebase/firebase-app'
import useSearchParams from '../../utils/use-search-params/use-search-params'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import styles from './login.module.scss'

type LoginProps = unknown

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 23,
    boxShadow: '0 3px 20px rgba(0, 0, 0, 0.08)',
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
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      background: 'rgba(8, 68, 294, 0.07)',
      borderColor: 'rgba(8, 68, 294, 0.07)',
      borderRadius: 18,
    },
  },
  button: {
    backgroundColor: '#0844CC',
    borderRadius: 17,
    width: '100%',
  },
})
interface AuthError extends Error {
  code?: string
}

function Login(props: LoginProps) {
  const { user, userLoading, refresh: refreshUser } = useUser()
  const logout = useLogout()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | AuthError>(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { zipAndCity } = useCity()
  const router = useRouter()
  const query = useSearchParams()
  const query_continue = useMemo(() => query.get('continue'), [query])

  if (!userLoading && user && query_continue) {
    router.replace(query_continue)
  }

  const afterLogin = useAfterLogin({
    onSuccess: async () => {
      setError(null)

      await refreshUser()

      await router.replace(
        query_continue || (zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/')
      )
    },
    onError: setError,
  })

  const handleSignInWithEmailAndPassword = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setError(null)
      getAuth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => afterLogin(user!))
        .catch(setError)
        .finally(() => setLoading(false))
    },
    [afterLogin, email, password]
  )

  const afterSignUp = useAfterSignUp({
    onSuccess: async () => {
      setError(null)
      await refreshUser()
      await router.replace(zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/')
    },
    onError: setError,
  })

  const continueWithGoogle = useCallback(() => {
    if (!zipAndCity) {
      return
    }
    setLoading(true)
    setError(null)
    getAuth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(({ user }) =>
        afterSignUp(user!, {
          zip_code_id: zipAndCity.id,
          full_name: user?.displayName || '',
          business_size: 'INDIVIDUAL',
        })
      )
      .catch(setError)
      .finally(() => setLoading(false))
  }, [afterSignUp, zipAndCity])

  const continueWithFacebook = useCallback(() => {
    if (!zipAndCity) {
      return
    }
    setLoading(true)
    setError(null)
    getAuth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(({ user }) =>
        afterSignUp(user!, {
          zip_code_id: zipAndCity.id,
          full_name: user?.displayName || '',
          business_size: 'INDIVIDUAL',
        })
      )
      .catch(() => {
        setError
      })
      .finally(() => setLoading(false))
  }, [afterSignUp, zipAndCity])

  const continueWithApple = useCallback(() => {
    if (!zipAndCity) {
      return
    }
    setLoading(true)
    setError(null)
    getAuth()
      .signInWithPopup(new firebase.auth.OAuthProvider('apple.com'))
      .then(({ user }) =>
        afterSignUp(user!, {
          zip_code_id: zipAndCity.id,
          full_name: user?.displayName || '',
          business_size: 'INDIVIDUAL',
        })
      )
      .catch(setError)
      .finally(() => setLoading(false))
  }, [afterSignUp, zipAndCity])

  const classes = useStyles(props)

  return (
    <>
      <Header />
      <main className={styles.login__main}>
        <Container>
          <div className={styles.login__root}>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={styles.login__rightSection}>
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
                          href={
                            zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/'
                          }
                          passHref
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
                  ) : (
                    <>
                      <form
                        method="POST"
                        action="#"
                        onSubmit={handleSignInWithEmailAndPassword}
                      >
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
                              Enter Your Details
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
                                disabled={loading}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                                className={classes.input}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item>
                            <FormControl fullWidth>
                              <TextField
                                type="password"
                                label="Password"
                                aria-label="Password"
                                size="medium"
                                variant="outlined"
                                required
                                disabled={loading}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={classes.input}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item>
                            <Typography
                              variant="body1"
                              component="div"
                              className={classes.centerText}
                            >
                              <Link href="/forgot-password">
                                Forgot password?
                              </Link>
                            </Typography>
                          </Grid>

                          <Grid item>
                            <Button
                              className={classes.button}
                              type="submit"
                              color="primary"
                              size="large"
                              variant="contained"
                              disabled={loading}
                            >
                              Continue
                            </Button>
                          </Grid>

                          <Grid item>
                            <Typography
                              variant="body1"
                              component="div"
                              className={classes.centerText}
                            >
                              Don&apos;t have an account?{' '}
                              <Link href="/sign-up">Sign up</Link>
                            </Typography>
                          </Grid>
                        </Grid>
                      </form>

                      {!error?.message ? null : (
                        <>
                          <Divider className={classes.divider} />

                          <Typography
                            variant="body2"
                            color="error"
                            component="div"
                          >
                            {(() => {
                              if (typeof error)
                                if (
                                  error &&
                                  error.code === 'auth/popup-closed-by-user'
                                ) {
                                  return 'Authentication failed'
                                }
                              return error?.message
                            })()}
                          </Typography>
                        </>
                      )}

                      <Divider className={classes.divider} />
                      <Grid item>
                        <Typography
                          variant="body1"
                          component="div"
                          className={classes.centerText}
                        >
                          Or, continue with:
                        </Typography>
                      </Grid>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <ButtonGroup orientation="horizontal" fullWidth>
                            <Button
                              className={styles.login__socialBtn}
                              color="primary"
                              size="large"
                              variant="outlined"
                              onClick={() => continueWithGoogle()}
                              title={'Continue with Google'}
                            >
                              <Image alt="Google" src={GoogleIconAsset} />
                            </Button>

                            <Button
                              className={styles.login__socialBtn}
                              color="primary"
                              size="large"
                              variant="outlined"
                              onClick={() => continueWithFacebook()}
                              title={'Continue with Facebook'}
                            >
                              <Image alt="Facebook" src={FacebookIconAsset} />
                            </Button>

                            <Button
                              className={styles.login__socialBtn}
                              color="primary"
                              size="large"
                              variant="outlined"
                              onClick={() => continueWithApple()}
                              title={'Continue with Apple'}
                            >
                              <Image alt="Apple" src={AppleIconAsset} />
                            </Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
      {/* <Container className={classes.root} maxWidth="xs">
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
                  passHref
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
          ) : (
            <>
              <form
                method="POST"
                action="#"
                onSubmit={handleSignInWithEmailAndPassword}
              >
                <Grid container direction="column" spacing={2}>
                  <Grid item className={classes.centerText}>
                    <Image
                      alt="1stKare Logo"
                      src={LogoAsset}
                      placeholder="blur"
                      layout="fixed"
                      height={64}
                      width={52.04}
                      sizes="52.04px"
                      priority
                    />
                  </Grid>

                  <Grid item className={classes.centerText}>
                    <Typography variant="h5" component="h1">
                      Enter Your Details
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
                        disabled={loading}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <FormControl fullWidth>
                      <TextField
                        type="password"
                        label="Password"
                        aria-label="Password"
                        size="medium"
                        variant="outlined"
                        required
                        disabled={loading}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1" component="div">
                      <Link href="/forgot-password">Forgot password?</Link>
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Button
                      className={classes.fullWidth}
                      type="submit"
                      color="primary"
                      size="large"
                      variant="contained"
                      disabled={loading}
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

              <Divider className={classes.divider} />

              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="body1" component="div">
                    Or, continue with:
                  </Typography>
                </Grid>

                <Grid item>
                  <ButtonGroup orientation="horizontal" fullWidth>
                    <Button
                      className={classes.fullWidth}
                      color="primary"
                      size="large"
                      variant="outlined"
                      onClick={() => continueWithGoogle()}
                      title={'Continue with Google'}
                    >
                      <Image alt="Google" src={GoogleIconAsset} />
                    </Button>

                    <Button
                      className={classes.fullWidth}
                      color="primary"
                      size="large"
                      variant="outlined"
                      onClick={() => continueWithFacebook()}
                      title={'Continue with Facebook'}
                    >
                      <Image alt="Facebook" src={FacebookIconAsset} />
                    </Button>

                    <Button
                      className={classes.fullWidth}
                      color="primary"
                      size="large"
                      variant="outlined"
                      onClick={() => continueWithApple()}
                      title={'Continue with Apple'}
                    >
                      <Image alt="Apple" src={AppleIconAsset} />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
      </Container> */}

      <Footer />
    </>
  )
}

export default Login
