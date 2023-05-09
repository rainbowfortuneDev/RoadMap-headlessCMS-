import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './privacy.module.scss'

export type PrivacyProps = {
  content: string
}

function Privacy({ content }: PrivacyProps) {
  return (
    <>
      <Header />

      <main className={styles.privacy}>
        <article
          className={styles.privacy__content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      <Footer />
    </>
  )
}

export default Privacy
