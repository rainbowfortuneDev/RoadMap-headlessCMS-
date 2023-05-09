import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import Terms from '../src/components/terms/terms'
import { strapiServerRequest } from '../src/utils/strapi/strapi-server-request'

import type { TermsProps } from '../src/components/terms/terms'
import type { GetStaticProps } from 'next'

type TermsPageProps = TermsProps

function TermsPage(props: TermsPageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Terms" />

      <Terms {...props} />
    </div>
  )
}

export default TermsPage

export const getStaticProps: GetStaticProps<TermsPageProps> = async () => {
  const {
    legal: {
      terms: { content },
    },
  } = await strapiServerRequest<{
    legal: { terms: { content: TermsPageProps['content'] } }
  }>(
    gql`
      query Terms_StaticProps {
        legal {
          terms {
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
