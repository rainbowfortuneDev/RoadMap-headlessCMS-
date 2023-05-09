import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'
import nextConnect from 'next-connect'

import { email } from '../../../src/utils/email/mailgun'
import { initFirebaseAdmin } from '../../../src/utils/firebase/firebase-admin'

import type {
  ContactMessageInput,
  ContactMessageResponse,
} from '../../../src/utils/contact/types'

import { CONTACT_EMAIL_TO } from '../../../src/utils/config'

initFirebaseAdmin()

// POST /api/contact/message
const handler = nextConnect<
  NextApiRequest,
  NextApiResponse<ContactMessageResponse>
>().post(async (req, res) => {
  try {
    const recaptchaToken = req.headers['x-recaptcha-token'] as string
    if (!recaptchaToken) {
      throw new Error('reCAPTCHA token not found')
    }

    await admin.appCheck().verifyToken(recaptchaToken)

    const body = req.body as ContactMessageInput
    if (!body) {
      throw new Error('Request body not found')
    }

    await email({
      to: CONTACT_EMAIL_TO!,
      subject: `1stKare Contact Form Entry (#${Date.now()})`,
      text: `NAME:\n${body.full_name}\n\nEMAIL:\n${body.email}\n\nMESSAGE:\n${body.message}`,
    })

    res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ success: false, error: (e as Error)?.message })
  }
})

export default handler
