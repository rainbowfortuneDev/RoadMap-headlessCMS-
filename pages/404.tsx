// import NextError from 'next/error'

import Footer from '../src/components/_shared/footer/footer'
import Header from '../src/components/_shared/header/header'
import styles from '../src/components/404-error/404-error.module.scss'

function Custom404() {
  return (
    <div className="page_container">
      <Header />

      <div
        id="notfound"
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
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Custom404
