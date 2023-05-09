import { getCookie, setCookie } from 'cookies-next'
import { NextPageContext } from 'next'

const Cookie = {
  firebaseToken: 'firebaseToken',
} as const

export namespace Cookies {
  export const getFirebaseToken = (ctx?: NextPageContext) => {
    return getCookie(Cookie.firebaseToken, { ...ctx })
  }

  export const setFirebaseToken = (token: string) => {
    setCookie(Cookie.firebaseToken, token)
  }
}
