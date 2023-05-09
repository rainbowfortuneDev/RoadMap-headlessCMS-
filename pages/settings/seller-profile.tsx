import { NextSeo } from 'next-seo'

import SettingsSellerProfile from '../../src/components/settings-seller-profile/settings-seller-profile'

type SettingsSellerProfilePageProps = unknown

function SettingsSellerProfilePage(_: SettingsSellerProfilePageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Update your seller profile settings" />

      <SettingsSellerProfile />
    </div>
  )
}

export default SettingsSellerProfilePage
