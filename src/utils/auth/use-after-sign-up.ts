import firebase from 'firebase/app'
import { useCallback } from 'react'

import { getAuth } from '../../utils/firebase/firebase-app'
import useAfterLogin from './use-after-login'

import type { AuthSignUpOnHasuraInput } from './types'

type UseAfterSignUpConfig = {
  afterAfterSignUp?: () => void | Promise<void>
  onSuccess?: () => void | Promise<void>
  onError?: (e: Error) => void | Promise<void>
}

function useAfterSignUp({
  onSuccess = () => {},
  onError = () => {},
}: UseAfterSignUpConfig) {
  const afterLogin = useAfterLogin()

  const afterSignUp = useCallback(
    async (
      user: firebase.User,
      input: Omit<AuthSignUpOnHasuraInput, 'idToken'>
    ) => {
      try {
        const idToken = await user.getIdToken()

        const data: AuthSignUpOnHasuraInput = { ...input, idToken }
        const response = await fetch('/api/auth/sign-up-on-hasura', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!response.ok) {
          throw await response.json()
        }

        await afterLogin(getAuth().currentUser!)

        await onSuccess()
      } catch (e) {
        await getAuth().signOut()
        await onError(e as Error)
      }
    },
    [afterLogin, onError, onSuccess]
  )

  return afterSignUp
}

export default useAfterSignUp
