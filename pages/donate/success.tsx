import { NextSeo } from 'next-seo'

import DonateSuccess from '../../src/components/donate-success/donate-success'

type DonatePageSuccessProps = unknown

function DonateSuccessPage(_: DonatePageSuccessProps) {
  return (
    <div className="page_container">
      <NextSeo title="Thanks for donating!" />

      <DonateSuccess />
    </div>
  )
}

export default DonateSuccessPage
