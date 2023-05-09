import { NextSeo } from 'next-seo'

import DonateCancelled from '../../src/components/donate-cancelled/donate-cancelled'

type DonateCancelledPageProps = unknown

function DonateCancelledPage(_: DonateCancelledPageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Donation cancelled" />

      <DonateCancelled />
    </div>
  )
}

export default DonateCancelledPage
