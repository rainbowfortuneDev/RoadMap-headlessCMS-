import firebase from 'firebase/app'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { getAuth } from '../firebase/firebase-app'
import useAfterLogin from './use-after-login'
import useMightBeLoggedIn from './use-might-be-logged-in'

import type { PropsWithChildren } from 'react'

export type AuthContextValue = {
  authLoading: boolean
  authError: firebase.auth.Error | null
  authUser: firebase.User | null
  idToken: firebase.auth.IdTokenResult | null
  mightBeLoggedIn: boolean

  refresh: () => void
}

export const authContextDefaultValue: AuthContextValue = {
  authLoading: true,
  authError: null,
  authUser: null,
  idToken: null,
  mightBeLoggedIn: true,

  refresh: () => {},
}

export const AuthContext = createContext<AuthContextValue>(
  authContextDefaultValue
)

type AuthProviderProps = PropsWithChildren<unknown>

function AuthProvider({ children }: AuthProviderProps) {
  const [authLoading, setAuthLoading] =
    useState<AuthContextValue['authLoading']>(true)
  const [authError, setAuthError] =
    useState<AuthContextValue['authError']>(null)
  const [authUser, setAuthUser] = useState<AuthContextValue['authUser']>(null)
  const [idToken, setIdToken] = useState<string | null>(null)
  const mightBeLoggedIn = useMightBeLoggedIn()

  useEffect(() => {
    getAuth().onAuthStateChanged(
      (authUser) => {
        setAuthUser(authUser)
        setAuthLoading(false)
      },
      (e) => {
        setAuthError(e)
        setAuthLoading(false)
      }
    )
  }, [])

  const afterLogin = useAfterLogin()
  const refresh = useCallback(() => {
    authUser?.getIdTokenResult().then(async (result) => {
      if (!result.claims['https://hasura.io/jwt/claims']) {
        await afterLogin(authUser)
      }
      setIdToken(JSON.stringify(result))
    })
  }, [afterLogin, authUser])

  useEffect(() => {
    refresh()
  }, [refresh])

  const value = useMemo(
    () => ({
      authLoading: mightBeLoggedIn && !authUser && authLoading,
      authError,
      authUser,
      idToken: JSON.parse(idToken || 'null'),
      mightBeLoggedIn: mightBeLoggedIn,

      refresh,
    }),
    [authError, authLoading, authUser, idToken, mightBeLoggedIn, refresh]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider

export function useAuth() {
  return useContext(AuthContext)
}
