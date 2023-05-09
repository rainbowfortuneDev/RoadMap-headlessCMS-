import { NextSeo } from 'next-seo'

import Contact from '../src/components/contact/contact'

import type { ContactProps } from '../src/components/contact/contact'

type ContactPageProps = ContactProps

function ContactPage(props: ContactPageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Contact" />

      <Contact {...props} />
    </div>
  )
}

export default ContactPage
