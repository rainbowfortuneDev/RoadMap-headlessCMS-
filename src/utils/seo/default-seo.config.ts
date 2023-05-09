import { DefaultSeoProps } from 'next-seo'

const defaultSeoConfig: DefaultSeoProps = {
  titleTemplate: '%s | 1stKare',
  title: 'Discover skilled service providers near you!',
  description:
    '1stKare democratizes services by empowering providers, giving them more control. 1stKare allows skilled individuals to offer gigs directly to customers.',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://1stkare.com/',
    site_name: '1stKare',
    images: [
      {
        url: 'https://1stkare.com/android-chrome-384x384.png',
        width: 384,
        height: 384,
        alt: '1stKare Icon',
      },
    ],
  },

  twitter: {
    handle: '@1stKare',
    site: '@1stKare',
    cardType: 'summary',
  },

  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        '1stkare, service providers, gigs, senior care, pet, automobile, personal care, health, legal, travel & tourism, business, marketing & sales, home care, computer & technology, children care, events',
    },
  ],
}

export default defaultSeoConfig
