import { NextSeo } from 'next-seo'

import Login from '../src/components/login/login'

function LoginPage() {
  return (
    <div className="page_container">
      <NextSeo title="Login" />

      <Login />
    </div>
  )
}

export default LoginPage
