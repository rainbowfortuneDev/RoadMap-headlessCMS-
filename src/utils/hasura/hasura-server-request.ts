import { RequestDocument, Variables } from 'graphql-request/dist/types'
import { RequestInit } from 'graphql-request/dist/types.dom'

import { hasuraServerGraphqlClient } from './hasura-server-graphql-client'

export async function hasuraServerRequest<
  T = unknown,
  V extends Variables = Variables
>(
  document: RequestDocument,
  variables?: V,
  requestHeaders?: RequestInit['headers']
): Promise<T> {
  return await hasuraServerGraphqlClient.request<T, V>(
    document,
    variables,
    requestHeaders
  )
}
