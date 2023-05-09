import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import Privacy from '../src/components/privacy/privacy'
import { strapiServerRequest } from '../src/utils/strapi/strapi-server-request'

import type { PrivacyProps } from '../src/components/privacy/privacy'
import type { GetStaticProps } from 'next'

type PrivacyPageProps = PrivacyProps

function PrivacyPage(props: PrivacyPageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Privacy" />

      <Privacy {...props} />
    </div>
  )
}

export default PrivacyPage

export const getStaticProps: GetStaticProps<PrivacyPageProps> = async () => {
  const {
    legal: {
      privacy: { content },
    },
  } = await strapiServerRequest<{
    legal: { privacy: { content: PrivacyPageProps['content'] } }
  }>(
    gql`
      query Privacy_StaticProps {
        legal {
          privacy {
            content
          }
        }
      }
    `
  )

  return {
    props: {
      content,
    },
    revalidate: 1,
  }
}
