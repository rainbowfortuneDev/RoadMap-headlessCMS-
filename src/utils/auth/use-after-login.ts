import firebase from 'firebase/app'
import { useCallback } from 'react'
import { getAuth } from '../../utils/firebase/firebase-app'
import { mightBeLoggedInKey } from './use-might-be-logged-in'

import type { AuthSetCustomClaimsInput } from './types'
import { Cookies } from '../cookies'

type UseAfterLoginConfig = {
  afterAfterLogin?: () => void | Promise<void>
  onSuccess?: () => void | Promise<void>
  onError?: (e: Error) => void | Promise<void>
}

function useAfterLogin({
  onSuccess = () => {},
  onError = () => {},
}: UseAfterLoginConfig = {}) {
  const afterLogin = useCallback(
    async (user: firebase.User) => {
      try {
        const idToken = await user.getIdToken(true)

        const data: AuthSetCustomClaimsInput = { idToken }
        const response = await fetch('/api/auth/set-custom-claims', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!response.ok) {
          throw await response.json()
        }

        const token = await user.getIdToken(true)
        Cookies.setFirebaseToken(token)

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(mightBeLoggedInKey, 'true')
        }

        await onSuccess()
      } catch (e) {
        await getAuth().signOut()
        await onError(e as Error)
      }
    },
    [onError, onSuccess]
  )

  return afterLogin
}

export default useAfterLogin
