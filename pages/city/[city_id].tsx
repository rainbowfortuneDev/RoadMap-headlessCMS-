import { gql } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import type { CityDetailProps } from '../../src/components/city-detail/city-detail'
import CityDetail from '../../src/components/city-detail/city-detail'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

function CityDetailPage(props: CityDetailProps) {
  return (
    <div className="page_container">
      <NextSeo title="Discover skilled professionals near you!" />

      <CityDetail {...props} />
    </div>
  )
}

export default CityDetailPage

export const getStaticPaths: GetStaticPaths<{ city_id: string }> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<CityDetailProps> = async () => {
  const { categories } = await hasuraServerRequest<{
    categories: {
      id: number
      name: string
      sub_categories: {
        id: number
      }[]
    }[]
  }>(gql`
    query CityDetail__StaticProps {
      categories(order_by: { order: asc }) {
        id
        name
        sub_categories {
          id
        }
      }
    }
  `)

  return {
    props: {
      categories,
    },
    revalidate: false,
  }
}
