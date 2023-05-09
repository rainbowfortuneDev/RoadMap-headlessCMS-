import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './terms.module.scss'

export type TermsProps = {
  content: string
}

function Terms({ content }: TermsProps) {
  return (
    <>
      <Header />

      <main className={styles.terms}>
        <article
          className={styles.terms__content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      <Footer />
    </>
  )
}

export default Terms
