import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import type { PropsWithChildren } from 'react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type {
  Cities as CityType,
  Zip_Codes as ZipCodeType,
} from '../../generated/graphql'
import { useCityContext__UpdateUserZipAndCityMutation } from '../../generated/graphql'
import { useUser } from '../user/user-context'

export const cityKey = 'city/chosenZipAndCity'

export type CityContextValue = {
  zipAndCity:
    | (Pick<ZipCodeType, 'id' | 'zip_code' | 'latitude' | 'longitude'> & {
        city: Pick<
          CityType,
          'id' | 'name' | 'state_code' | 'country_code' | 'alt_id'
        >
      })
    | null
  setZipAndCity: (setZipAndCity: CityContextValue['zipAndCity'] | null) => void
}

export const CityContextDefaultValue: CityContextValue = {
  zipAndCity:
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem(cityKey) || 'null')
      : null,
  setZipAndCity: (city: CityContextValue['zipAndCity'] | null) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(cityKey, JSON.stringify(city))
      setCookie(cityKey, JSON.stringify(city))
    }
  },
}

export const CityContext = createContext<CityContextValue>(
  CityContextDefaultValue
)

type CityProviderProps = PropsWithChildren<unknown>

function CityProvider({ children }: CityProviderProps) {
  const [zipAndCity, _setZipAndCity] = useState(
    CityContextDefaultValue.zipAndCity
  )
  const [previousZipAndCity, setPreviousZipAndCity] = useState(zipAndCity)

  const { user, refresh } = useUser()

  const updateUserZipAndCity = useCityContext__UpdateUserZipAndCityMutation()[1]

  const setZipAndCity = useCallback(
    (newZipAndCity: CityContextValue['zipAndCity'] | null) => {
      setPreviousZipAndCity(zipAndCity)
      _setZipAndCity(newZipAndCity)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(cityKey, JSON.stringify(newZipAndCity))
      }
      setCookie(cityKey, JSON.stringify(newZipAndCity))

      if (user && newZipAndCity) {
        updateUserZipAndCity({
          user_id: user.id,
          zip_code_id: newZipAndCity.id,
        })
          .then(() => refresh())
          .catch(console.error)
      }
    },
    [zipAndCity, refresh, updateUserZipAndCity, user]
  )

  useEffect(() => {
    if (zipAndCity && user && !user.zip_code?.id) {
      setZipAndCity(zipAndCity)
    } else if (
      zipAndCity &&
      previousZipAndCity &&
      user?.zip_code &&
      user.zip_code.id !== zipAndCity.id &&
      user.zip_code.id !== previousZipAndCity.id
    ) {
      setZipAndCity(user.zip_code)
    }
  }, [previousZipAndCity, setZipAndCity, user, zipAndCity])

  const value = useMemo<CityContextValue>(
    () => ({ zipAndCity, setZipAndCity }),
    [zipAndCity, setZipAndCity]
  )

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>
}

export default CityProvider

export function useCity(requireCity = true) {
  const value = useContext(CityContext)

  const router = useRouter()
  useEffect(() => {
    if (
      requireCity &&
      !value.zipAndCity &&
      !['/', '/contact', '/faq', '/terms', '/privacy'].includes(router.pathname)
    ) {
      router.replace(`/?continue=${encodeURIComponent(router.asPath)}`)
      return
    }
  }, [requireCity, router, value.zipAndCity])

  return value
}
