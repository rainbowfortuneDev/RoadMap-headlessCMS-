import { NextSeo } from 'next-seo'

import SignUp from '../src/components/sign-up/sign-up'

function SignUpPage() {
  return (
    <div className="page_container">
      <NextSeo title="Sign up" />

      <SignUp />
    </div>
  )
}

export default SignUpPage
