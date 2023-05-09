import { NextSeo } from 'next-seo'

import SettingsAccount from '../../src/components/settings-account/settings-account'

type SettingsAccountPageProps = unknown

function SettingsAccountPage(_: SettingsAccountPageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Update your account settings" />

      <SettingsAccount />
    </div>
  )
}

export default SettingsAccountPage
