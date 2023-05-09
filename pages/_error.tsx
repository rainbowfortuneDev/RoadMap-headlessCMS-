import { GetServerSideProps } from 'next'
// import NextError from 'next/error'

import Footer from '../src/components/_shared/footer/footer'
import Header from '../src/components/_shared/header/header'
import styles from '../src/components/500-error/500-error.module.scss'

// import FiveHundredError from '../src/components/500-error/500-error'

type MyErrorProps = { statusCode: number }

function MyError({ statusCode }: MyErrorProps) {
  return (
    <div className="page_container">
      <Header />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div className={`${styles['notfound']}`}>
          <div className={`${styles['notfound-404']}`}>
            <h1>Oops!</h1>
          </div>
          <h2>500 - Internal Server Error</h2>
          <p>Something has gone wrong. We are looking into it..</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyError

export const getServerSideProps: GetServerSideProps<MyErrorProps> = async ({
  res,
}) => {
  return {
    props: {
      statusCode: res.statusCode || 404,
    },
  }
}
