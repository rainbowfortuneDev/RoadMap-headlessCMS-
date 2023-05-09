import admin from 'firebase-admin'
import { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import type {
  Users as UserType,
  Zip_Codes as ZipCodeType,
} from '../../../src/generated/graphql'
import type { AuthSetCustomClaimsInput } from '../../../src/utils/auth/types'
import { initFirebaseAdmin } from '../../../src/utils/firebase/firebase-admin'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'

initFirebaseAdmin()

// POST /api/auth/set-custom-claims
const handler = nextConnect<
  NextApiRequest,
  NextApiResponse<{ success: boolean; message?: string }>
>().post(async (req, res) => {
  try {
    const token = await admin
      .auth()
      .verifyIdToken((req.body as AuthSetCustomClaimsInput).idToken)

    const { users } = await hasuraServerRequest<
      {
        users: (Pick<
          UserType,
          'id' | 'alt_id' | 'firebase_uid' | 'stripe_customer_id'
        > & {
          zip_code: Pick<ZipCodeType, 'id' | 'zip_code' | 'city_id'>
        })[]
      },
      { firebase_uid: string }
    >(
      gql`
        query UserByFirebaseId($firebase_uid: String!) {
          users(limit: 1, where: { firebase_uid: { _eq: $firebase_uid } }) {
            id
            alt_id
            firebase_uid
            zip_code {
              id
              city_id
            }
            stripe_customer_id
          }
        }
      `,
      { firebase_uid: token.uid }
    )

    if (!users?.length) {
      res.status(404).json({ success: false, message: 'Please sign up first.' })
      return
    }
    const user = users[0]

    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'user',
        'x-hasura-allowed-roles': ['anonymous', 'user'],
        ...({
          'x-hasura-user-id': user.id.toString(),
          'x-hasura-firebase-uid': user.firebase_uid,
          'x-hasura-zip-code-id': user.zip_code.id.toString(),
          'x-hasura-city-id': user.zip_code.city_id.toString(),
        } as { [key: string]: string }),
      },
    }

    await admin.auth().setCustomUserClaims(user.firebase_uid, customClaims)

    res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ success: false, message: (e as Error)?.message })
    throw e
  }
})

export default handler
