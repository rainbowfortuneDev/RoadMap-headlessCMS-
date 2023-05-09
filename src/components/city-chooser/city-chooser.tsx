import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Autocomplete from '@mui/material/Autocomplete'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
// import CityChooserImg from '../../assets/images/city-chooser/city-chooser.png'
import LogoAsset from '../../assets/images/_shared/logo.png'
import { useCityChooser__SearchCitiesQuery } from '../../generated/graphql'
import type { CityContextValue } from '../../utils/city/city-context'
import { useCity } from '../../utils/city/city-context'
import useSearchParams from '../../utils/use-search-params/use-search-params'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './city-chooser.module.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 23,
    boxShadow: '0 3px 20px rgba(0, 0, 0, 0.08)',
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
  },
}))

function CityChooser() {
  const classes = useStyles()
  const query = useSearchParams()
  const query_q = useMemo(() => query.get('q'), [query])
  const query_stay = useMemo(() => query.get('stay'), [query])
  const query_continue = useMemo(() => query.get('continue'), [query])

  const [term, setTerm] = useState(query_q || '')
  const [selectedZipAndCity, setSelectedZipAndCity] = useState<
    CityContextValue['zipAndCity'] | null
  >(null)

  const [termUpdatedPaused, setTermUpdatePaused] = useState(false)
  useEffect(() => {
    if (query_q) {
      setTerm(query_q)
      setTermUpdatePaused(true)
    }
    setTimeout(() => setTermUpdatePaused(false), 0)
  }, [query_q])

  const { zipAndCity, setZipAndCity } = useCity()
  const router = useRouter()

  const [searchCitiesResult] = useCityChooser__SearchCitiesQuery({
    variables: { term: `%${term.split(',')[0] || ''}%` },
  })

  const [submitted, setSubmitted] = useState(false)
  const handleSetCity = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (!selectedZipAndCity) {
        return
      }
      setSubmitted(true)
      setZipAndCity(selectedZipAndCity)
      router.push(query_continue ?? `/city/${selectedZipAndCity.city.alt_id}`)
    },
    [query_continue, router, selectedZipAndCity, setZipAndCity]
  )

  const shouldAutoRedirect = useMemo(
    () => query_stay !== '1' && zipAndCity?.city.id,
    [query_stay, zipAndCity?.city.id]
  )
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])

  /*
   * if (shouldAutoRedirect) {
   * router.replace(query_continue ?? `/city/${zipAndCity?.city.alt_id || process.env['NEXT_PUBLIC_DEFAULT_CITY_ALT_ID']}`) } */

  if (shouldAutoRedirect) {
    router.replace(
      query_continue ??
        `/city/${zipAndCity?.city.alt_id || 'zWr_UNCoZbGu8Jf0MkpEN'}`
    )
  }

  return (
    <>
      <Header />

      <main className={styles.cityChooser__main}>
        {!ready || shouldAutoRedirect ? (
          <CircularProgress style={{ margin: 'auto' }} />
        ) : (
          <>
            {/* <Image
              className={styles.cityChooser__bg}
              alt="City Chooser page's background image"
              src={CityChooserBgAsset}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              priority
            /> */}
            <Container>
              <div className={classes.root}>
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <form
                      className={styles.cityChooser__paper}
                      method="POST"
                      action="#"
                      onSubmit={handleSetCity}
                    >
                      <div>
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

                      <Typography
                        variant="h5"
                        component="h1"
                        className={styles.cityChooser__leftTitle}
                      >
                        Choose Your City
                      </Typography>

                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={styles.cityChooser__leftDesc}
                      >
                        Where are you located?
                      </Typography>

                      <Autocomplete
                        id="combo-box-demo"
                        options={searchCitiesResult.data?.zip_codes || []}
                        getOptionLabel={(zipAndCity) =>
                          `${zipAndCity.city.name}, ${zipAndCity.city.state_code}, ${zipAndCity.zip_code}`
                        }
                        onChange={(_e, value) => setSelectedZipAndCity(value)}
                        inputValue={term}
                        onInputChange={
                          termUpdatedPaused
                            ? undefined
                            : (_e, value) => setTerm(value)
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Enter your ZIP code"
                            helperText={
                              selectedZipAndCity
                                ? `${selectedZipAndCity.city.name}, ${selectedZipAndCity.city.state_code}, ${selectedZipAndCity.zip_code}`
                                : zipAndCity
                                ? `${zipAndCity.city.name}, ${zipAndCity.city.state_code}, ${zipAndCity.zip_code}`
                                : undefined
                            }
                            autoFocus
                            className={classes.input}
                          />
                        )}
                        fullWidth
                      />

                      <Button
                        className={classes.button}
                        type="submit"
                        color="primary"
                        size="large"
                        variant="contained"
                        disabled={!selectedZipAndCity || submitted}
                      >
                        Continue
                      </Button>
                    </form>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default CityChooser
