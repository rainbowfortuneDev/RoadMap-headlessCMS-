import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'

// let timer: NodeJS.Timeout | undefined
// let state: 'loading' | 'stop' | undefined
// let activeRequests = 0
// const delay = 250

function startProgress() {
  // if (state === 'loading') {
  //   return
  // }

  // state = 'loading'

  // timer = setTimeout(function () {
  NProgress.start()
  // }, delay)
}

function stopProgress() {
  // if (activeRequests > 0) {
  //   return
  // }

  // state = 'stop'

  // if (timer !== undefined) {
  //   clearTimeout(timer)
  // }
  NProgress.done()
}

// NProgress.configure({ showSpinner: false })

// const originalFetch = window.fetch
// window.fetch = async function (...args) {
//   if (activeRequests === 0) {
//     load()
//   }

//   activeRequests++

//   try {
//     const response = await originalFetch(...args)
//     return response
//   } catch (error) {
//     return Promise.reject(error)
//   } finally {
//     activeRequests -= 1
//     if (activeRequests === 0) {
//       stop()
//     }
//   }
// }

function TopProgressBar() {
  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    Router.events.on('routeChangeStart', startProgress)
    Router.events.on('routeChangeComplete', stopProgress)
    Router.events.on('routeChangeError', stopProgress)
    return () => {
      Router.events.off('routeChangeStart', startProgress)
      Router.events.off('routeChangeComplete', stopProgress)
      Router.events.off('routeChangeError', stopProgress)
    }
  }, [])
  return null
}

export default TopProgressBar
