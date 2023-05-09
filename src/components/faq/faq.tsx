// import { Divider, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './faq.module.scss'

export type FaqProps = {
  faqs: { question: string; answer: string }[]
}

function Faq({ faqs }: FaqProps) {
  return (
    <>
      <Header />

      <main className={styles.faq}>
        <div>
          <Typography variant="h1" component="h1">
            FAQ
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            Frequently Asked Questions About 1stKare
          </Typography>
        </div>

        <Divider />

        {faqs.map(({ question, answer }, i) => (
          <details key={`${i}-${question}`} className={styles.faq__details}>
            <summary>{question}</summary>
            <section
              className={styles.faq__answer}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </details>
        ))}
      </main>

      <Footer />
    </>
  )
}

export default Faq
