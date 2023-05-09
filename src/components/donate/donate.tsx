import { useEffect, useMemo, useRef } from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './donate.module.scss'

type DonateProps = unknown

function Donate(_: DonateProps) {
  const { user, userLoading } = useUser()
  const email = useMemo(() => user?.email || '', [user?.email])

  const formRef = useRef<HTMLFormElement | null>(null)
  useEffect(() => {
    if (userLoading) {
      return
    }
    if (formRef.current) {
      formRef.current.submit()
    }
  }, [userLoading])

  return (
    <>
      <Header />

      <main className={styles.donate}>
        <form
          ref={formRef}
          method="POST"
          action="/api/stripe/donation/checkout"
        >
          <CircularProgress />

          <input type="hidden" name="email" value={email} />
        </form>
      </main>

      <Footer />
    </>
  )
}

export default Donate
