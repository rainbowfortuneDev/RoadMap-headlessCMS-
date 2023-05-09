import { createTransport, SentMessageInfo } from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'

import { EMAIL_FROM } from '../../utils/config'

export type EmailConfig = {
  mailgun?: {
    apiKey: string
    domain: string
  }

  from?: string

  subject?: string
  to: string
} & ({ html: string } | { text: string })

export async function email(
  config: EmailConfig
): Promise<SentMessageInfo | null> {
  if (process.env['NO_EMAIL'] === 'true') {
    console.warn(
      'WARNING! Skipping sending an email, because NO_EMAIL environment variable is set to true.'
    )
    return null
  }

  if (!config.from && !{ EMAIL_FROM }) {
    throw new Error('NO_EMAIL_FROM: Sender email address not provided.')
  }
  if (!config.mailgun?.apiKey && !process.env['MAILGUN_API_KEY']) {
    throw new Error('NO_MAILGUN_API_KEY: Mailgun API key not provided.')
  }
  if (!config.mailgun?.domain && !process.env['MAILGUN_DOMAIN']) {
    throw new Error('NO_MAILGUN_DOMAIN: Mailgun domain not provided.')
  }

  return createTransport(
    mg({
      auth: {
        api_key: config.mailgun?.apiKey ?? process.env['MAILGUN_API_KEY']!,
        domain: config.mailgun?.domain ?? process.env['MAILGUN_DOMAIN']!,
      },
    })
  ).sendMail({
    from: config.from || EMAIL_FROM,
    to: config.to,
    subject: config.subject || '',
    html: (config as Exclude<EmailConfig, { text: string }>).html,
    text: !(config as Exclude<EmailConfig, { text: string }>).html
      ? (config as Exclude<EmailConfig, { html: string }>).text
      : '',
  })
}
