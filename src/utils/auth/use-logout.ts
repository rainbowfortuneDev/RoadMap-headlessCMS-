import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { getAuth } from '../../utils/firebase/firebase-app'
import { mightBeLoggedInKey } from './use-might-be-logged-in'

type UseLogoutConfig = {
  redirectTo?: string
  afterLogout?: () => void | Promise<void>
}

function useLogout({
  redirectTo = undefined,
  afterLogout = () => {},
}: UseLogoutConfig = {}) {
  const router = useRouter()

  const logout = useCallback(
    async (e?: Event | unknown) => {
      ;(e as Event)?.preventDefault?.()

      await getAuth().signOut()

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(mightBeLoggedInKey, 'false')
      }

      if (redirectTo !== undefined) {
        router.push(redirectTo)
      }

      await afterLogout()
    },
    [afterLogout, redirectTo, router]
  )

  return logout
}

export default useLogout
