import { GraphQLClient } from 'graphql-request'

const hasuraAdminSecret = process.env['HASURA_ADMIN_SECRET']
if (!hasuraAdminSecret) {
  throw new Error('HASURA_ADMIN_SECRET is not set')
}

const hasuraEndpoint = process.env['NEXT_PUBLIC_HASURA_ENDPOINT']
if (!hasuraEndpoint) {
  throw new Error('NEXT_PUBLIC_HASURA_ENDPOINT is not set')
}

export const hasuraServerGraphqlClient = new GraphQLClient(hasuraEndpoint, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': hasuraAdminSecret,
  },
})
