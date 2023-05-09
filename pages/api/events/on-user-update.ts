import admin from 'firebase-admin'
import nextConnect from 'next-connect'

import { initFirebaseAdmin } from '../../../src/utils/firebase/firebase-admin'

import type { NextApiRequest, NextApiResponse } from 'next'

initFirebaseAdmin()

// POST /api/events/on-user-update
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const uid = req.body.event.session_variables['x-hasura-firebase-uid']
    if (
      !/^hasura\-graphql-engine\//.test(req.headers['user-agent'] ?? '') ||
      req.headers.secret !== process.env['EVENT_WEBHOOK_SECRET'] ||
      req.body.trigger.name !== 'on_user_update' ||
      req.body.table.name !== 'users' ||
      req.body.event.op !== 'UPDATE' ||
      !uid
    ) {
      res.status(401).send('Unauthorized')
      return
    }

    const newFullName = req.body.event.data.new.full_name
    const newEmail = req.body.event.data.new.email
    if (!newFullName || !newEmail) {
      res.status(400).send('Bad Request')
      return
    }

    admin.auth().updateUser(uid, {
      displayName: newFullName,
      email: newEmail,
      emailVerified: false,
    })

    res.status(204).end()
  }
)

export default handler
