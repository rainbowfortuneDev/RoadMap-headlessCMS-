import { NextSeo } from 'next-seo'
import { getCookie } from 'cookies-next'
import CityChooser from '../src/components/city-chooser/city-chooser'
import { cityKey, CityContextValue } from '../src/utils/city/city-context'

function IndexPage() {
  return (
    <div className="page_container">
      <NextSeo title="Choose your city" />

      <CityChooser />
    </div>
  )
}

export default IndexPage

export const getServerSideProps = async (ctx) => {
  const cityAndZipStringfied = getCookie(cityKey, { ...ctx }) ?? null
  let cityAndZip: CityContextValue['zipAndCity'] | null = null
  if (cityAndZipStringfied) {
    try {
      cityAndZip = JSON.parse(
        cityAndZipStringfied as string
      ) as CityContextValue['zipAndCity']
    } catch (e) {
      cityAndZip = null
    }
  }
  const query = ctx.query

  if (cityAndZip && query.stay !== '1') {
    console.log('Redirecting')
    return {
      redirect: {
        destination:
          query.continue ??
          `/city/${cityAndZip?.city.alt_id || 'zWr_UNCoZbGu8Jf0MkpEN'}`,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
