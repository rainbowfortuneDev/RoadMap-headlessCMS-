import { NextSeo } from 'next-seo'

import ForgotPassword from '../src/components/forgot-password/forgot-password'

function ForgotPasswordPage() {
  return (
    <div className="page_container">
      <NextSeo title="Reset your password" />

      <ForgotPassword />
    </div>
  )
}

export default ForgotPasswordPage
