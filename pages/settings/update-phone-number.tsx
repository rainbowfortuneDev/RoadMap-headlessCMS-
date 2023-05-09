import { NextSeo } from 'next-seo'

import SettingsUpdatePhoneNumber from '../../src/components/settings-update-phone-number/settings-update-phone-number'

type SettingsUpdatePhoneNumberPageProps = unknown

function SettingsUpdatePhoneNumberPage(_: SettingsUpdatePhoneNumberPageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Update your phone number" />

      <SettingsUpdatePhoneNumber />
    </div>
  )
}

export default SettingsUpdatePhoneNumberPage
