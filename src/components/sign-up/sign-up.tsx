import ButtonGroup from '@mui/material/ButtonGroup'
import CircularProgress from '@mui/material/CircularProgress'
import FormControl from '@mui/material/FormControl'
import Divider from '@mui/material/Divider'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

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
// import PeopleImg from '../../assets/images/people.png'
import LogoAsset from '../../assets/images/_shared/logo.png'
import { theme } from '../../styles/theme'
import type { AuthSignUpOnHasuraInput } from '../../utils/auth/types'
import useAfterSignUp from '../../utils/auth/use-after-sign-up'
import useLogout from '../../utils/auth/use-logout'
import { useCity } from '../../utils/city/city-context'
import { getAuth } from '../../utils/firebase/firebase-app'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import styles from './sign-up.module.scss'

type SignUpProps = unknown

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
  middle: {
    verticalAlign: 'middle',
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

function SignUp(props: SignUpProps) {
  const { user, userLoading, refresh: refreshUser } = useUser()
  const logout = useLogout()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [finished, setFinished] = useState(false)

  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const afterSignUp = useAfterSignUp({
    onSuccess: async () => {
      setError(null)
      await refreshUser()
      setFinished(true)
      await router.push('/settings/seller-profile?onboarding=1')
    },
    onError: setError,
  })

  const { zipAndCity } = useCity()

  const input = useMemo<Omit<AuthSignUpOnHasuraInput, 'idToken'>>(
    () => ({
      zip_code_id: zipAndCity?.id!,
      full_name,
      business_size: 'INDIVIDUAL',
    }),
    [full_name, zipAndCity?.id]
  )

  const handleSignUpWithEmailAndPassword = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setError(null)

      getAuth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => afterSignUp(user!, input))
        .catch(setError)
        .finally(() => setLoading(false))
    },
    [afterSignUp, email, input, password, setError]
  )

  const continueWithGoogle = useCallback(() => {
    setLoading(true)
    setError(null)

    getAuth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(({ user }) => afterSignUp(user!, input))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [afterSignUp, input, setError])

  const continueWithFacebook = useCallback(() => {
    setLoading(true)
    setError(null)

    getAuth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(({ user }) => afterSignUp(user!, input))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [afterSignUp, input, setError])

  const continueWithApple = useCallback(() => {
    setLoading(true)
    setError(null)

    getAuth()
      .signInWithPopup(new firebase.auth.OAuthProvider('apple.com'))
      .then(({ user }) => afterSignUp(user!, input))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [afterSignUp, input, setError])

  const classes = useStyles(props)

  return (
    <>
      <Header />
      <main className={styles.signUp__main}>
        <Container>
          <div className={styles.signUp__root}>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={styles.signUp__rightSection}>
                  {userLoading || loading ? (
                    <div className={classes.centerText}>
                      <CircularProgress />
                    </div>
                  ) : user && !finished ? (
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <Typography variant="body1" component="div">
                          You are already logged in.
                        </Typography>
                      </Grid>

                      <Grid item>
                        <NextLink
                          href={
                            zipAndCity ? `/city/${zipAndCity.city.id}` : '/'
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
                        onSubmit={handleSignUpWithEmailAndPassword}
                      >
                        <Grid container direction="column" spacing={2}>
                          {finished ? (
                            <div className={classes.centerText}>
                              <CircularProgress />
                            </div>
                          ) : (
                            <>
                              <Grid item className={classes.centerText}>
                                <Image
                                  alt="1stKare Logo"
                                  src={LogoAsset}
                                  placeholder="blur"
                                  layout="fixed"
                                  height={115}
                                  width={150}
                                  sizes="100px"
                                  priority
                                  objectFit="contain"
                                />
                              </Grid>

                              <Grid item className={classes.centerText}>
                                <Typography variant="h5" component="h1">
                                  Create Your Account
                                </Typography>
                              </Grid>

                              <Grid item>
                                <FormControl fullWidth>
                                  <TextField
                                    type="text"
                                    label="Full Name"
                                    aria-label="Full Name"
                                    size="medium"
                                    variant="outlined"
                                    required
                                    disabled={loading}
                                    value={full_name}
                                    onChange={(e) =>
                                      setFullName(e.target.value)
                                    }
                                    autoFocus
                                    className={classes.input}
                                  />
                                </FormControl>
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
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    className={classes.input}
                                  />
                                </FormControl>
                              </Grid>

                              <Grid item>
                                <Button
                                  className={classes.button}
                                  type="submit"
                                  color="primary"
                                  size="large"
                                  variant="contained"
                                  disabled={
                                    loading || !full_name || !email || !password
                                  }
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
                                  Already have an account?{' '}
                                  <Link href="/login">Login</Link>
                                </Typography>
                              </Grid>

                              {!error?.message ? null : (
                                <>
                                  <Grid item>
                                    <Divider />
                                  </Grid>

                                  <Grid item>
                                    <Typography
                                      variant="body2"
                                      color="error"
                                      component="div"
                                    >
                                      {error?.message}
                                    </Typography>
                                  </Grid>
                                </>
                              )}

                              <Grid item>
                                <Divider />
                              </Grid>

                              <Grid item>
                                <Typography
                                  variant="body1"
                                  component="div"
                                  className={classes.centerText}
                                >
                                  Or, continue with:
                                </Typography>
                              </Grid>

                              <Grid item>
                                <ButtonGroup orientation="horizontal" fullWidth>
                                  <Button
                                    className={styles.signUp__socialBtn}
                                    color="primary"
                                    size="large"
                                    variant="outlined"
                                    onClick={() => continueWithGoogle()}
                                    title={'Continue with Google'}
                                  >
                                    <Image alt="Google" src={GoogleIconAsset} />
                                  </Button>

                                  <Button
                                    className={styles.signUp__socialBtn}
                                    color="primary"
                                    size="large"
                                    variant="outlined"
                                    onClick={() => continueWithFacebook()}
                                    title={'Continue with Facebook'}
                                  >
                                    <Image
                                      alt="Facebook"
                                      src={FacebookIconAsset}
                                    />
                                  </Button>

                                  <Button
                                    className={styles.signUp__socialBtn}
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
                            </>
                          )}
                        </Grid>
                      </form>
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
          ) : user && !finished ? (
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="body1" component="div">
                  You are already logged in.
                </Typography>
              </Grid>

              <Grid item>
                <NextLink
                  href={zipAndCity ? `/city/${zipAndCity.city.id}` : '/'}
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
                onSubmit={handleSignUpWithEmailAndPassword}
              >
                <Grid container direction="column" spacing={2}>
                  {finished ? (
                    <div className={classes.centerText}>
                      <CircularProgress />
                    </div>
                  ) : (
                    <>
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
                          Create Your Account
                        </Typography>
                      </Grid>

                      <Grid item>
                        <FormControl fullWidth>
                          <TextField
                            type="text"
                            label="Full Name"
                            aria-label="Full Name"
                            size="medium"
                            variant="outlined"
                            required
                            disabled={loading}
                            value={full_name}
                            onChange={(e) => setFullName(e.target.value)}
                            autoFocus
                          />
                        </FormControl>
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
                        <Button
                          className={classes.fullWidth}
                          type="submit"
                          color="primary"
                          size="large"
                          variant="contained"
                          disabled={
                            loading || !full_name || !email || !password
                          }
                        >
                          Continue
                        </Button>
                      </Grid>

                      <Grid item>
                        <Typography variant="body1" component="div">
                          Already have an account?{' '}
                          <Link href="/login">Login</Link>
                        </Typography>
                      </Grid>

                      {!error?.message ? null : (
                        <>
                          <Grid item>
                            <Divider />
                          </Grid>

                          <Grid item>
                            <Typography
                              variant="body2"
                              color="error"
                              component="div"
                            >
                              {error?.message}
                            </Typography>
                          </Grid>
                        </>
                      )}

                      <Grid item>
                        <Divider />
                      </Grid>

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
                    </>
                  )}
                </Grid>
              </form>
            </>
          )}
        </Paper>
      </Container> */}

      <Footer />
    </>
  )
}

export default SignUp
