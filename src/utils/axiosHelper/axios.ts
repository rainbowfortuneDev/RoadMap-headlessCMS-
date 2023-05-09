import axios from 'axios'

export const baseURL = process.env['NEXT_PUBLIC_HASURA_REST_ENDPOINT_BASEURL']
if (!baseURL) {
  throw new Error('NEXT_PUBLIC_HASURA_REST_ENDPOINT_BASEURL is not set')
}

const instance = axios.create({
  baseURL,
})

export default instance
