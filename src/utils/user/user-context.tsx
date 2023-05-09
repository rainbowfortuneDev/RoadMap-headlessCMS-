import { useRouter } from 'next/router'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'

import {
  useUserContext__GetMeQuery,
  useUserContext__UpdateLastSeenMutation,
} from '../../generated/graphql'
import { authContextDefaultValue, useAuth } from '../auth/auth-context'

import type { UserContext__GetMeQuery } from '../../generated/graphql'
import type { AuthContextValue } from '../auth/auth-context'

export type UserContextValue = {
  auth: AuthContextValue

  userLoading: boolean
  userError: Error | null
  user: UserContext__GetMeQuery['meArray'][number] | null

  refresh: () => void
}

export const UserContextDefaultValue: UserContextValue = {
  auth: authContextDefaultValue,

  userLoading: true,
  userError: null,
  user: null,

  refresh: () => {},
}

export const UserContext = createContext<UserContextValue>(
  UserContextDefaultValue
)

type UserProviderProps = PropsWithChildren<unknown>

function UserProvider({ children }: UserProviderProps) {
  const auth = useAuth()

  const [{ fetching: userLoading, error: userError, data: _data }, reexecute] =
    useUserContext__GetMeQuery({
      variables: { firebase_uid: auth.authUser?.uid! },
    })

  useEffect(() => {
    if (auth.authUser?.uid) {
      reexecute()
    }
  }, [auth.authUser?.uid, reexecute])

  const refresh = useCallback(() => {
    auth.refresh()
    reexecute({ requestPolicy: 'network-only' })
  }, [auth, reexecute])

  const value = useMemo(
    () => ({
      auth,

      userLoading:
        auth.mightBeLoggedIn &&
        ((userLoading && !_data?.meArray[0]) || auth.authLoading),
      userError: userError || null,
      user: _data?.meArray[0] || null,

      refresh,
    }),
    [_data?.meArray, auth, refresh, userError, userLoading]
  )

  useUpdateLastSeen(value.user?.id)
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider

export function useUser(requireLogin = false) {
  const ctx = useContext(UserContext)

  const router = useRouter()

  if (requireLogin && !ctx.userLoading && !ctx.user) {
    router.replace(`/login?continue=${encodeURIComponent(router.asPath)}`)
  }

  return ctx
}

export function useUpdateLastSeen(userId?: number) {
  const router = useRouter()

  const updateLastSeen = useUserContext__UpdateLastSeenMutation()[1]

  const refreshLastSeen = () => {
    if (userId) {
      updateLastSeen({ id: userId })
    }
  }

  useEffect(() => {
    if (!userId) {
      return
    }

    const interval = setInterval(() => {
      if (!userId) {
        return
      }

      if (/^\/settings\/seller-profile/.test(router.asPath)) {
        return
      }

      updateLastSeen({ id: userId })
    }, 60000)

    return () => {
      clearInterval(interval)
    }
  }, [router.asPath, updateLastSeen, userId])

  return { refreshLastSeen }
}
