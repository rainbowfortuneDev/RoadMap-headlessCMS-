import admin from 'firebase-admin'
import { gql } from 'graphql-request'
import nextConnect from 'next-connect'

import { Users_Insert_Input } from '../../../src/generated/graphql'
import { initFirebaseAdmin } from '../../../src/utils/firebase/firebase-admin'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'

import type { NextApiRequest, NextApiResponse } from 'next'
import type { AuthSignUpOnHasuraInput } from '../../../src/utils/auth/types'

initFirebaseAdmin()

// POST /api/auth/sign-up-on-hasura
const handler = nextConnect<
  NextApiRequest,
  NextApiResponse<{ success: boolean; message?: string }>
>().post(async (req, res) => {
  try {
    const { idToken, ...input }: any = req.body as AuthSignUpOnHasuraInput &
      Users_Insert_Input

    const token = await admin.auth().verifyIdToken(idToken)
    if (!token.uid || !token.email || (!input.full_name && !token.name)) {
      res.status(401).json({
        success: false,
        message: 'Token or input missing critical information',
      })
      return
    }
    input.firebase_uid = token.uid
    input.full_name = input.full_name || token.name
    input.email = token.email
    input.phone = token.phone_number || null

    try {
      await hasuraServerRequest<
        { affected_rows: number },
        { object: Users_Insert_Input }
      >(
        gql`
          mutation RegisterUser($object: users_insert_input!) {
            insert_users_one(
              object: $object
              on_conflict: {
                constraint: users_email_key
                update_columns: firebase_uid
              }
            ) {
              id
            }
          }
        `,
        { object: input }
      )
    } catch (e) {
      if (
        ['google.com', 'facebook.com', 'apple.com'].includes(
          token.firebase.sign_in_provider
        ) &&
        (e as Error)?.message?.match(/uniqueness violation/gi)
      ) {
        // DO NOTHING
      } else {
        throw e
      }
    }

    res.status(200).json({ success: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ success: false, message: (e as Error)?.message })
  }
})

export default handler
