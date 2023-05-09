import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Divider from '@mui/material/Divider'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { makeStyles } from '@mui/styles'
import firebase from 'firebase/app'
import NextError from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FormEvent } from 'react'
import { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import LogoAsset from '../../assets/images/_shared/logo.png'
import { useSettingsUpdatePhoneNumber__UpdateProfileMutation } from '../../generated/graphql'
import useRecaptchaV2 from '../../utils/use-recaptcha/use-recaptcha-v2'
import useSearchParams from '../../utils/use-search-params/use-search-params'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import styles from './settings-update-phone-number.module.scss'
import Grid from '@mui/material/Grid'
import NextLink from 'next/link'
type SettingsUpdatePhoneNumberProps = unknown

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
})

function SettingsUpdatePhoneNumber(_: SettingsUpdatePhoneNumberProps) {
  const classes = useStyles()
  const { user, userLoading, refresh: refreshUser, auth } = useUser(true)

  const query = useSearchParams()
  const query_continue = useMemo(() => query.get('continue'), [query])

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  const [phone, _setPhone] = useState('')
  const setPhone = useCallback((value: string) => {
    let newValue = value
    _setPhone(newValue)
  }, [])
  const [code, setCode] = useState('')

  const codeFieldRef = useRef<HTMLInputElement | null>(null)

  const [isCodeSent, setIsCodeSent] = useState(false)
  const [phoneNumberPass, setPhoneNumberPass] = useState(false)
  const [verificationId, setVerificationId] = useState<string | null>(null)

  const verifier = useRecaptchaV2()

  useEffect(() => {
    if (!onlyNumbers(phone) && phone.length !== 0) {
      setCustomError(new Error('No character other than + is allowed.'))
      setPhoneNumberPass(false)
    } else if (phone.length === 0) {
      setCustomError(null)
      setPhoneNumberPass(false)
    } else if (phone.length < 10) {
      setCustomError(new Error('Phone number too short.'))
      setPhoneNumberPass(false)
    } else if (phone.length > 10) {
      setCustomError(new Error('Phone number too long.'))
      setPhoneNumberPass(false)
    } else {
      setCustomError(null)
      setPhoneNumberPass(true)
    }
  }, [phone])

  function onlyNumbers(str: string) {
    return /^[+0-9]+$/.test(str)
  }

  const handleSendCode = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      // if (!phoneNumberPass) {
      // setCustomError(new Error('Invalid phone number.'))
      // return
      // }

      if (!verifier) {
        setCustomError(new Error('Recaptcha not configured'))
        setTimeout(() => {
          setCustomError(null)
        }, 3000)
        return
      } else {
        setLoading(true)
        setCustomError(null)

        verifier.render()

        const phoneProvider = new firebase.auth.PhoneAuthProvider()

        phoneProvider
          .verifyPhoneNumber('+1' + phone, verifier)
          .then((id) => {
            setVerificationId(id)
            setIsCodeSent(true)
          })
          .catch((err) => {
            setCustomError(
              new Error("Something wen't wrong. Please, try again.")
            )
            setTimeout(() => {
              setCustomError(null)
            }, 3000)
          })
          .finally(() => {
            setLoading(false)
            setTimeout(
              () => codeFieldRef.current?.querySelector('input')?.focus(),
              300
            )
          })
      }
    },
    [phone, verifier]
  )

  const [{ error }, updateProfile] =
    useSettingsUpdatePhoneNumber__UpdateProfileMutation()

  const handleVerify = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!user || !auth.authUser || !verificationId) {
        return
      }

      setLoading(true)
      setCustomError(null)

      const cred = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      )

      Promise.all([
        auth.authUser.updatePhoneNumber(cred),
        updateProfile({ user_id: user.id, _set: { phone } }),
      ])
        .then(() => refreshUser())
        .then(() => router.push(query_continue ?? '/settings/account'))
        .catch(setCustomError)
        .finally(() => setLoading(false))
    },
    [
      auth.authUser,
      code,
      phone,
      query_continue,
      refreshUser,
      router,
      updateProfile,
      user,
      verificationId,
    ]
  )

  return (
    <>
      <Header />

      {!user && !userLoading ? (
        <NextError statusCode={401} />
      ) : (
        <main className={styles.settings}>
          {!isCodeSent ? (
            <form
              className={styles.settings__paper}
              method="POST"
              action="#"
              onSubmit={handleSendCode}
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
                    Update Your Phone Number
                  </Typography>
                  {user.phone ? (
                    `Current Number: ${user.phone}`
                  ) : (
                    <Typography
                      variant="h2"
                      component="h2"
                      color="textSecondary"
                    >
                      Currently, no phone number is registered to your account.
                    </Typography>
                  )}

                  <FormControl fullWidth>
                    <TextField
                      type="tel"
                      error={
                        error?.message || customError?.message ? true : false
                      }
                      label="Phone Number"
                      aria-label="Phone Number"
                      placeholder="E.g. 5551234567"
                      size="medium"
                      variant="outlined"
                      required
                      disabled={loading}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      helperText={
                        error?.message || customError?.message
                          ? error?.message || customError?.message
                          : 'Enter your phone number and click continue.'
                      }
                      autoFocus
                      className={classes.input}
                    />
                  </FormControl>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <NextLink href={`/settings/seller-profile`} passHref>
                        <Button
                          color="primary"
                          size="large"
                          variant="contained"
                          style={{ width: '100%' }}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      </NextLink>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        color="primary"
                        size="large"
                        variant="contained"
                        disabled={!phoneNumberPass || loading || !phone}
                        style={{ width: '100%' }}
                        className={classes.button}
                      >
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
            </form>
          ) : (
            <form
              className={styles.settings__paper}
              method="POST"
              action="#"
              onSubmit={handleVerify}
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
                      height={80}
                      width={80}
                      sizes="80px"
                      priority
                      objectFit="contain"
                    />
                  </div>
                  <Typography variant="h5" component="h1">
                    Complete Phone Number Verification
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Enter the code we sent to {phone} in the box below to
                    complete your phone verification.
                  </Typography>

                  <FormControl fullWidth>
                    <TextField
                      ref={codeFieldRef}
                      type="text"
                      label="Code"
                      aria-label="Code"
                      size="medium"
                      variant="outlined"
                      required
                      disabled={loading}
                      value={code}
                      onChange={(e) => {
                        setCode(e.target.value)
                      }}
                      helperText={
                        <>
                          <Link
                            href={router.asPath}
                            onClick={(e) => {
                              e.preventDefault()
                              verifier?.render()
                              setIsCodeSent(false)
                            }}
                          >
                            Go back and try again
                          </Link>
                        </>
                      }
                      autoFocus
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    color="primary"
                    size="large"
                    variant="contained"
                    disabled={loading}
                    style={{ width: '100%' }}
                  >
                    Verify and Save
                  </Button>

                  {!error?.message && !customError?.message ? null : (
                    <>
                      <Divider style={{ width: '100%' }} />

                      <Typography variant="body2" color="error" component="div">
                        {error?.message || customError?.message}
                      </Typography>
                    </>
                  )}
                </>
              )}
            </form>
          )}
        </main>
      )}
      <Footer />
    </>
  )
}

export default SettingsUpdatePhoneNumber
