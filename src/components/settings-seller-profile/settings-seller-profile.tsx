import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CircularProgress from '@mui/material/CircularProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'

import Avatar from '@mui/material/Avatar'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { makeStyles } from '@mui/styles'
import EditIcon from '@mui/icons-material/Edit'
import { DropzoneDialog } from 'react-mui-dropzone'
import NextError from 'next/error'
import Image from 'next/image'
import router from 'next/router'
import type { FormEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
// useSettingsSellerProfile__UpdatePromotionalStatusMutation,
import {
  useSettingsSellerProfile__GetStripeCustomerPortalLinkMutation,
  useSettingsSellerProfile__UpdateProfileMutation,
  useFetchBusinessSizeQuery,
} from '../../generated/graphql'
import type { AuthSignUpOnHasuraInput } from '../../utils/auth/types'
import { upload } from '../../utils/object-storage/upload'
import useSearchParams from '../../utils/use-search-params/use-search-params'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import NextLink from 'next/link'
import styles from './settings-seller-profile.module.scss'
import { useSnackbar } from 'notistack'

type SettingsSellerProfileProps = unknown

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
  setPhoneNumberWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  setPhoneLinkWrapper: {
    textAlign: 'center',
    color: '#0844CC',
    cursor: 'pointer',
  },
})

function SettingsSellerProfile(_: SettingsSellerProfileProps) {
  const { enqueueSnackbar } = useSnackbar()
  const classes = useStyles()
  const { user, userLoading, refresh: refreshUser, auth } = useUser(true)

  const check = user?.posts.filter((i) => i.promotion_status < 4)

  const query = useSearchParams()
  const onboarding = query.get('onboarding') === '1'

  const [loading, setLoading] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  var savedBName = ''
  var savedBSize = 'INDIVIDUAL'
  var savedBAdd = ''
  if (typeof window !== 'undefined') {
    var sprof = localStorage.getItem(`sellerProfile${user?.id}`)
    if (sprof != null) {
      sprof = JSON.parse(sprof)
      if (sprof) {
        // console.log('///////////////////persist',sprof['business_name']);
        savedBName = sprof['business_name']
        savedBSize = sprof['business_size']
        savedBAdd = sprof['contact_address']
      }
    }
  }

  const [business_size, setBusinessSize] = useState<
    AuthSignUpOnHasuraInput['business_size']
  >(
    (user?.business_size as AuthSignUpOnHasuraInput['business_size']) ??
      savedBSize
  )
  const [business_name, setBusinessName] = useState<
    AuthSignUpOnHasuraInput['business_name']
  >(user?.business_name ?? savedBName)
  const [contact_address, setContactAddress] = useState<string>(
    user?.contact_address ?? savedBAdd
  )
  const [is_privacy_enabled, setIsPrivacyEnabled] = useState<boolean>(
    user?.is_privacy_enabled ?? true
  )

  const [BusinessDropdown_data, setBusinessDropdown_data] = useState<any>({})

  const [_isSponsored, setIsSponsored] = useState(false)
  const [updatePromStatus, setupdatePromStatus] = useState(false)

  const bussinessData = useFetchBusinessSizeQuery()

  useEffect(() => {
    // console.log('sellerProfile'+user?.id);
    var sprof = {}
    sprof['business_name'] = business_name
    sprof['business_size'] = business_size
    sprof['contact_address'] = contact_address

    localStorage.setItem(`sellerProfile${user?.id}`, JSON.stringify(sprof))
  }, [business_name, business_size, contact_address])
  useEffect(() => {}, [user])

  useEffect(() => {
    if (bussinessData[0].data) {
      // setBusinessDropdown_data(
      //   bussinessData[0].data!.business_sizes.filter((i) => i.status === 1)
      // )
      setBusinessDropdown_data(bussinessData[0].data!.business_sizes)
    }
    setBusinessSize(
      (prev) =>
        (user?.business_size as AuthSignUpOnHasuraInput['business_size']) ??
        prev
    )
    if (user) {
      if (check && check.length > 0) {
        setIsSponsored(true)
      } else {
        setIsSponsored(false)
      }
    }

    setBusinessName((prev) => user?.business_name ?? prev)
    setContactAddress((prev) => user?.contact_address ?? prev)
    setIsPrivacyEnabled((prev) => user?.is_privacy_enabled ?? prev)
  }, [user])

  const goToCheckout = useCallback(
    async (onboarding: boolean): Promise<boolean> => {
      if (!user) {
        setCustomError(new Error('User not found'))
        return false
      }

      setLoading(true)

      await fetch('/api/stripe/user-subscription/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          onboarding,
          email: user.email,
          user_id: user.id,
        }),
      })
        .then((res) => res.json())
        .then((data: { url: string }) => (window.location.href = data.url))
        .catch(setCustomError)
        .finally(() => setLoading(false))

      return true
    },
    [user]
  )

  const [{ fetching, error }, updateProfile] =
    useSettingsSellerProfile__UpdateProfileMutation()
  //const [_any, updatePromotionalStatus] =
  //  useSettingsSellerProfile__UpdatePromotionalStatusMutation()

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      setLoading(true)

      if (!user) {
        return
      }
      // var promotion_status

      switch (business_size) {
        case 'INDIVIDUAL':
          // promotion_status = 4
          break

        case 'LOCAL_BUSINESS':
          // promotion_status = 2
          break

        case 'NATIONAL_BUSINESS':
          // promotion_status = 10
          break

        default:
          break
      }
      if (updatePromStatus) {
        //   updatePromotionalStatus({
        //     user_id: user.id,
        //     promotion_status: promotion_status || null,
        //   }).then(() => {
        //     setupdatePromStatus(false)
        //     return Promise.all([refreshUser()])
        //   })
      }

      updateProfile({
        user_id: user.id,
        _set: {
          business_size: business_size,
          business_name: business_name || null,
          contact_address: contact_address || null,
          is_privacy_enabled: is_privacy_enabled,
        },
      })
        .then((v) => {
          if (v.error) {
            enqueueSnackbar('Update Failed!', {
              variant: 'error',
            })
          } else {
            enqueueSnackbar('Update Sucessfully!', {
              variant: 'success',
            })
          }

          return Promise.all([
            refreshUser(),

            onboarding
              ? router.push('/post/new?onboarding=1')
              : Promise.resolve(true),
          ])
        })
        .then(() => {
          setLoading(false)
        })
    },
    [
      business_name,
      business_size,
      contact_address,
      goToCheckout,
      is_privacy_enabled,
      onboarding,
      refreshUser,
      updateProfile,
      user,
    ]
  )

  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false)
  const handleChangeAvatar = useCallback(
    (files) => {
      const file = files[0]
      const token = auth.idToken?.token
      if (!file || !user || !token) {
        return
      }

      setLoading(true)
      setCustomError(null)

      upload(file, token)
        .then((data) =>
          updateProfile({
            user_id: user.id,
            _set: { avatar_file_id: data.file.id },
          })
        )
        .then(() => refreshUser())
        .catch(setCustomError)
        .finally(() => setLoading(false))
    },
    [auth.idToken?.token, refreshUser, updateProfile, user]
  )

  const [{ fetching: _gettingLink }, _getStripeCustomerPortalLink] =
    useSettingsSellerProfile__GetStripeCustomerPortalLinkMutation()

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
                  <Button
                    className={styles.settings__avatar}
                    onClick={() => setIsAvatarDialogOpen(true)}
                    title="Change Avatar"
                    disabled={fetching || loading}
                  >
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <>
                        {user.avatar?.url ? (
                          <Image
                            alt={`${user.full_name}'s Avatar`}
                            src={user.avatar?.url}
                            layout="fill"
                            sizes="96px"
                            objectFit="cover"
                            priority
                          />
                        ) : (
                          <Avatar
                            sx={{ width: 96, height: 96 }}
                            src="/broken-image.jpg"
                          />
                        )}

                        <div className={styles.settings__avatarOverlay}>
                          <EditIcon />
                        </div>
                      </>
                    )}
                  </Button>
                  <DropzoneDialog
                    open={isAvatarDialogOpen}
                    onSave={(files) => {
                      handleChangeAvatar(files)
                      setIsAvatarDialogOpen(false)
                    }}
                    acceptedFiles={['image/*']}
                    filesLimit={1}
                    previewGridProps={{
                      container: { xs: 12 },
                      item: { xs: 12 },
                    }}
                    maxFileSize={5000000}
                    onClose={() => setIsAvatarDialogOpen(false)}
                    submitButtonText="Upload"
                  />
                </div>

                <Typography variant="h5" component="h1" align="center">
                  {onboarding
                    ? 'Let us know more about your business'
                    : 'Profile Settings'}
                </Typography>

                {
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="business-size-select-label">
                      Business Size
                    </InputLabel>
                    <Select
                      labelId="business-size-select-label"
                      id="business-size-select"
                      label="Business Size"
                      aria-label="Business Size"
                      disabled={fetching || loading}
                      value={business_size}
                      onChange={(e) => {
                        business_size !== e.target.value
                          ? setupdatePromStatus(true)
                          : setupdatePromStatus(false)
                        setBusinessSize(e.target.value as typeof business_size)
                        e.target.value === 'INDIVIDUAL'
                          ? setIsPrivacyEnabled(true)
                          : setIsPrivacyEnabled(false)
                      }}
                      required
                      className={classes.input}
                    >
                      {BusinessDropdown_data.length &&
                        BusinessDropdown_data.map((i: any, index: any) => (
                          <MenuItem
                            disabled={
                              i.status === 0 || (check && check.length > 0)
                            }
                            value={i.value}
                            key={index}
                          >
                            {i.display_name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                }

                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Business Name"
                    aria-label="Business Name"
                    size="medium"
                    variant="outlined"
                    disabled={fetching || loading}
                    value={business_name}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={classes.input}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Street Address"
                    aria-label="Street Address"
                    size="medium"
                    variant="outlined"
                    disabled={fetching || loading}
                    value={contact_address}
                    onChange={(e) => setContactAddress(e.target.value)}
                    className={classes.input}
                    helperText={
                      <>
                        {user.zip_code.city.name},{' '}
                        {user.zip_code.city.state_code} (
                        <Link
                          href={`/?stay=1&continue=${encodeURIComponent(
                            router.asPath
                          )}`}
                        >
                          Change
                        </Link>
                        )
                      </>
                    }
                  />
                </FormControl>

                <div className={classes.setPhoneNumberWrapper}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ width: '100%' }}
                  >
                    <span className={styles.settings__paperTextSecondary}>
                      Phone:
                    </span>{' '}
                    {user.phone || 'N/A'}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ width: '100%' }}
                    className={classes.setPhoneLinkWrapper}
                  >
                    <NextLink
                      href={`/settings/update-phone-number?continue=${encodeURIComponent(
                        router.asPath
                      )}`}
                      passHref
                    >
                      {user.phone ? 'Update Number' : 'Set Phone Number'}
                    </NextLink>
                  </Typography>

                  {/* <Button
                      variant="outlined"
                      color="primary"
                      disabled={loading}
                      style={{ margin: '0 auto 0 0' }}
                      size="small"
                    >
                      {user.phone ? 'Update Number' : 'Set Phone Number'}
                    </Button> */}
                  {/* <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ width: '100%' }}
                    disabled={loading}
                    className={classes.setPhoneLinkWrapper}
                  >
                    <NextLink
                      href={`/settings/update-phone-number?continue=${encodeURIComponent(
                        router.asPath
                      )}`}
                      passHref
                    >
                      {user.phone ? 'Update Number' : 'Set Phone Number'}
                    </NextLink>
                  </Typography> */}
                </div>

                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={true}
                      checked={
                        is_privacy_enabled && business_size == 'INDIVIDUAL'
                      }
                      onChange={(e) => setIsPrivacyEnabled(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Enable street and phone privacy"
                  style={{ marginRight: 'auto' }}
                />

                <Button
                  type="submit"
                  color="primary"
                  size="large"
                  variant="contained"
                  disabled={fetching || loading}
                  style={{ width: '100%' }}
                  className={classes.button}
                >
                  {onboarding ? 'Continue' : 'Save'}
                </Button>

                {!error?.message && !customError?.message ? null : (
                  <>
                    <Divider style={{ width: '100%' }} />

                    <Typography variant="body2" color="error" component="div">
                      {customError?.message}
                    </Typography>
                  </>
                )}
              </>
            )}
          </form>
        </main>
      )}
      <Footer />
    </>
  )
}

export default SettingsSellerProfile
