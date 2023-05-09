import { PropsWithChildren, useMemo } from 'react'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import {
  createClient,
  defaultExchanges,
  Provider,
  subscriptionExchange,
} from 'urql'

import { useAuth } from '../auth/auth-context'

type UrqlProviderProps = PropsWithChildren<unknown>

function UrqlProvider({ children }: UrqlProviderProps) {
  const { idToken } = useAuth()

  const value = useMemo(() => {
    const awaitJWT = async () => {
      return await new Promise((resolve, reject) => {
        if (idToken) {
          resolve({
            headers: {
              authorization: `Bearer ${idToken.token}`,
            },
          })
        } else {
          reject()
        }
      })
    }

    const subscriptionClient = process.browser
      ? new SubscriptionClient(
          process.env['NEXT_PUBLIC_HASURA_WEBSOCKET_ENDPOINT'] ??
            'ws://localhost:8080/v1/graphql',
          {
            reconnect: true,
            connectionParams: awaitJWT,
            lazy: true,
          }
        )
      : null
    return createClient({
      url:
        process.env['NEXT_PUBLIC_HASURA_ENDPOINT'] ??
        'http://localhost:8080/v1/graphql',
      fetchOptions: {
        headers: idToken ? { Authorization: `Bearer ${idToken.token}` } : {},
      },
      exchanges: [
        ...defaultExchanges,
        subscriptionExchange({
          forwardSubscription: (operation) =>
            subscriptionClient!.request(operation),
        }),
      ],
    })
  }, [idToken])

  return <Provider value={value}>{children}</Provider>
}

export default UrqlProvider
