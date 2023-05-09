import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

// import { CircularProgress, Typography } from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import ContactBgAsset from '../../assets/images/contact/contact-bg.jpg'
import useRecaptchaV3 from '../../utils/use-recaptcha/use-recaptcha-v3'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './contact.module.scss'

import type { FormEvent } from 'react'
import type { ContactMessageInput } from '../../utils/contact/types'

export type ContactProps = {}

function Contact(_: ContactProps) {
  const [view, setView] = useState<'FORM' | 'SENT'>('FORM')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [validForm, setValidForm] = useState(false)

  const formRef = useRef<HTMLFormElement | null>(null)
  const fullNameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const messageRef = useRef<HTMLInputElement | null>(null)

  const Dataonchange = (data: any) => {
    const fullName = formRef.current?.full_name.value
    const email = formRef.current?.email.value
    const message = formRef.current?.message.value
    if (fullName && email && message) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }

  const getToken = useRecaptchaV3()

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (!formRef.current || loading) {
        return
      }

      setLoading(true)
      setError(null)

      const body: ContactMessageInput = {
        full_name: formRef.current.full_name.value,
        email: formRef.current.email.value,
        message: formRef.current.message.value,
      }

      getToken()
        .then(({ token }) =>
          fetch((e.target as HTMLFormElement).action, {
            method: (e.target as HTMLFormElement).method,
            headers: {
              'content-type': 'application/json',
              'x-recaptcha-token': token,
            },
            body: JSON.stringify(body),
          })
        )
        .then((response) => {
          if (response.ok) {
            setView('SENT')
            formRef.current?.reset()
          } else {
            throw new Error(
              `Unable to send message (${response.status}: ${response.statusText})`
            )
          }
        })
        .catch((e) => setError(e))
        .finally(() => setLoading(false))
    },
    [getToken, loading]
  )

  return (
    <div className="page_container">
      <Header />

      <main className={styles.contact}>
        <div className={styles.contact__bg}>
          <Image
            alt="Contact page's background image"
            src={ContactBgAsset}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {view === 'SENT' ? (
          <div className={styles.contact__form}>
            <Typography variant="h2" component="h1" align="center">
              Thanks for your message!
            </Typography>

            <Typography
              variant="subtitle1"
              component="div"
              align="center"
              color="textSecondary"
            >
              We will get back to you as soon as possible.
            </Typography>

            <Button
              variant="text"
              color="primary"
              onClick={() => setView('FORM')}
            >
              Go back to the contact form
            </Button>
          </div>
        ) : (
          <form
            ref={formRef}
            className={styles.contact__form}
            method="POST"
            action="/api/contact/message"
            onChange={Dataonchange}
            onSubmit={handleSubmit}
          >
            <Typography variant="h2" component="h1">
              Contact 1stKare
            </Typography>

            <TextField
              fullWidth
              ref={fullNameRef}
              name="full_name"
              variant="outlined"
              label="Your name"
              required
              autoFocus
              disabled={loading}
            />

            <TextField
              fullWidth
              ref={emailRef}
              name="email"
              type="email"
              variant="outlined"
              label="Your email"
              required
              disabled={loading}
            />

            <TextField
              fullWidth
              ref={messageRef}
              name="message"
              variant="outlined"
              label="Message"
              required
              multiline
              rows={10}
              disabled={loading}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading || !validForm}
            >
              {loading ? (
                <CircularProgress size={26} color="inherit" />
              ) : (
                'Send message'
              )}
            </Button>

            {!error?.message ? null : (
              <Typography variant="body1" color="error" component="div">
                {error?.message}
              </Typography>
            )}
          </form>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Contact
