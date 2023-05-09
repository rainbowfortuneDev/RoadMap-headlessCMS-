import { makeStyles } from '@mui/styles'

import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import NextError from 'next/error'
import { useSnackbar } from 'notistack'
import Image from 'next/image'
import type { FormEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
import LogoAsset from '../../assets/images/_shared/logo.png'
import { useSettingsAccount__UpdateAccountMutation } from '../../generated/graphql'
import type { AuthSignUpOnHasuraInput } from '../../utils/auth/types'
import { getAuth } from '../../utils/firebase/firebase-app'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './settings-account.module.scss'

type SettingsAccountProps = unknown

const useStyles = makeStyles({
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
  centerText: {
    textAlign: 'center',
  },
  resetPassword: {
    textAlign: 'center',
    color: '#0844CC',
    cursor: 'pointer',
  },
  loginMethod: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function SettingsAccount(_: SettingsAccountProps) {
  const { enqueueSnackbar } = useSnackbar()
  const classes = useStyles()
  const { user, userLoading, refresh: refreshUser, auth } = useUser(true)

  //const [loading, setLoading] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  const [full_name, setFullName] = useState<
    AuthSignUpOnHasuraInput['full_name']
  >(user?.full_name ?? '')
  const [email, setEmail] = useState(user?.email ?? '')

  const [isPasswordResetEmailSent, setIsPasswordResetEmailSent] =
    useState(false)
  const sendPasswordResetEmail = useCallback(() => {
    //setLoading(true)
    setCustomError(null)
    getAuth()
      .sendPasswordResetEmail(email)
      .then(() => setIsPasswordResetEmailSent(true))
      .catch(setCustomError)
    //.finally(() => setLoading(false))
  }, [email])

  useEffect(() => {
    setFullName(user?.full_name ?? '')
    setEmail(user?.email ?? '')
  }, [user])

  const [{ fetching, error }, updateAccount] =
    useSettingsAccount__UpdateAccountMutation()

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!user) {
        return
      }

      updateAccount({
        user_id: user.id,
        _set: {
          full_name,

          ...(auth.idToken?.signInProvider === 'password' ? { email } : {}),
        },
      }).then(() => {
        enqueueSnackbar('Update Successfully', {
          variant: 'success',
        })
        refreshUser()
      })
    },
    [
      auth.idToken?.signInProvider,
      email,
      full_name,
      refreshUser,
      updateAccount,
      user,
    ]
  )

  return (
    <>
      <Header />

      {!user && !userLoading ? (
        <NextError statusCode={401} />
      ) : (
        <main className={styles.settings}>
          <form
            className={styles.settings__paper}
            method="POST"
            action="#"
            onSubmit={handleSubmit}
          >
            {!user || userLoading ? (
              <div style={{ textAlign: 'center' }}>
                <CircularProgress />
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center' }}>
                  <Image
                    alt="1stKare Logo"
                    src={LogoAsset}
                    placeholder="blur"
                    layout="fixed"
                    height={95}
                    width={120}
                    sizes="100px"
                    priority
                    objectFit="contain"
                  />
                </div>

                <Typography variant="h5" component="h1">
                  Account Settings
                </Typography>

                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Full Name"
                    aria-label="Full Name"
                    size="medium"
                    variant="outlined"
                    required
                    disabled={fetching}
                    value={full_name}
                    onChange={(e) => setFullName(e.target.value)}
                    className={classes.input}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    type="email"
                    label="Email"
                    aria-label="Email"
                    size="medium"
                    variant="outlined"
                    required
                    disabled={
                      fetching || auth.idToken?.signInProvider !== 'password'
                    }
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.input}
                  />
                </FormControl>

                <Button
                  type="submit"
                  color="primary"
                  size="large"
                  variant="contained"
                  disabled={fetching}
                  className={classes.button}
                >
                  Save Changes
                </Button>

                {!error?.message && !customError?.message ? null : (
                  <>
                    <Divider style={{ width: '100%' }} />

                    <Typography variant="body2" color="error" component="div">
                      {error?.message || customError?.message}
                    </Typography>
                  </>
                )}
                {isPasswordResetEmailSent ? (
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ width: '100%' }}
                  >
                    We&apos;ve sent you a password reset link! Please check your
                    email&apos;s inbox for instructions.
                  </Typography>
                ) : (
                  // <Button
                  //   variant="outlined"
                  //   color="primary"
                  //   disabled={loading}
                  //   onClick={() => sendPasswordResetEmail()}
                  //   style={{ margin: '0 auto 0 0' }}
                  //   size="small"
                  // >
                  //   Reset Password
                  // </Button>
                  <Typography
                    variant="body1"
                    component="div"
                    className={classes.resetPassword}
                    onClick={() => sendPasswordResetEmail()}
                  >
                    Reset Password
                  </Typography>
                )}

                <Divider style={{ width: '100%' }} />

                <div className={classes.loginMethod}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ width: '100%' }}
                  >
                    <span className={styles.settings__paperTextSecondary}>
                      Login Method:
                    </span>{' '}
                    {auth.idToken?.signInProvider?.toUpperCase() || 'N/A'}
                  </Typography>
                </div>
              </>
            )}
          </form>
        </main>
      )}
      <Footer />
    </>
  )
}

export default SettingsAccount
