import { RequestDocument, Variables } from 'graphql-request/dist/types'
import { RequestInit } from 'graphql-request/dist/types.dom'

import { strapiServerGraphqlClient } from './strapi-server-graphql-client'

export async function strapiServerRequest<
  T = unknown,
  V extends Variables = Variables
>(
  document: RequestDocument,
  variables?: V,
  requestHeaders?: RequestInit['headers']
): Promise<T> {
  return await strapiServerGraphqlClient.request<T, V>(
    document,
    variables,
    requestHeaders
  )
}
