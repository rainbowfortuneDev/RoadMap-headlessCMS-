//import { GraphQLClient } from 'graphql-request'

//const strapiEndpoint = process.env['NEXT_PUBLIC_STRAPI_ENDPOINT']
//if (!strapiEndpoint) {
//  throw new Error('NEXT_PUBLIC_STRAPI_ENDPOINT is not set')
// }

//export const strapiServerGraphqlClient = new GraphQLClient(strapiEndpoint, {})

import { GraphQLClient } from 'graphql-request'

const strapiEndpoint = process.env['NEXT_PUBLIC_STRAPI_ENDPOINT']
if (!strapiEndpoint) {
  throw new Error('NEXT_PUBLIC_STRAPI_ENDPOINT is not set')
}

export const strapiServerGraphqlClient = new GraphQLClient(strapiEndpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
})
