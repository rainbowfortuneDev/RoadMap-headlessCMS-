import { NextSeo } from 'next-seo'

import Donate from '../../src/components/donate/donate'

type DonatePageProps = unknown

function DonatePage(_: DonatePageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Donate" />

      {<Donate />}
      {
        <iframe src="https://www.sandbox.paypal.com/donate/?hosted_button_id=GQXPJMGQ8KJHY" />
      }
    </div>
  )
}

export default DonatePage
