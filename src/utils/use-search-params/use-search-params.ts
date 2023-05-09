import { useRouter } from 'next/router'
import { useMemo } from 'react'

function useSearchParams() {
  const router = useRouter()

  const searchParams = useMemo(
    () =>
      new URLSearchParams(router.asPath.slice(router.asPath.indexOf('?') + 1)),
    [router.asPath]
  )

  return searchParams
}

export default useSearchParams
