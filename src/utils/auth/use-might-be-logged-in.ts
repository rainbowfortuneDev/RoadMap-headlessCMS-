import { useCallback, useEffect, useMemo, useState } from 'react'

export const mightBeLoggedInKey = 'auth/mightBeLoggedIn'

function useMightBeLoggedIn() {
  const initialValue = useMemo(() => {
    if (typeof window === 'undefined') {
      return true
    }
    return window.localStorage.getItem(mightBeLoggedInKey) === 'true'
  }, [])
  const [mightBeLoggedIn, setMightBeLoggedIn] = useState(initialValue)

  const handler = useCallback((event: StorageEvent) => {
    if (event.key === mightBeLoggedInKey) {
      setMightBeLoggedIn(event.newValue === 'true')
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handler)
    }
    return () => window.removeEventListener('storage', handler)
  }, [handler])

  return mightBeLoggedIn
}

export default useMightBeLoggedIn
