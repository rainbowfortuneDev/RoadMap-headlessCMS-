import crypto from 'crypto'
import admin from 'firebase-admin'
import { gql } from 'graphql-request'
import multer from 'multer'
import multerSharpS3 from 'multer-sharp-s3'
import nextConnect from 'next-connect'

import { initFirebaseAdmin } from '../../../src/utils/firebase/firebase-admin'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'
import { s3 } from '../../../src/utils/object-storage/s3-client'

import type { NextApiRequest, NextApiResponse, PageConfig } from 'next'
import type {
  Files as FileType,
  Files_Insert_Input,
} from '../../../src/generated/graphql'
import type { ObjectStorageUploadResponse } from '../../../src/utils/object-storage/types'

initFirebaseAdmin()

const upload = multer({
  storage: multerSharpS3({
    s3,

    ACL: 'public-read',
    Bucket: process.env['SPACES_BUCKET'],
    Key: (
      _req: unknown,
      file: {
        encoding: string
        fieldname: string
        mimetype: string
        originalname: string
      },
      cb: (err: Error | null, filename?: string) => void
    ) => {
      const ext = file?.originalname.slice(file?.originalname.lastIndexOf('.'))
      crypto.pseudoRandomBytes(16, (err, raw) => {
        cb(
          err,
          err ? undefined : `user-uploads/${raw.toString('hex')}${ext ?? ''}`
        )
      })
    },

    resize: {
      width: 1920,
      options: {
        fit: 'contain',
      },
    },
  }),
})

// POST /api/object-storage/upload
const handler = nextConnect<
  NextApiRequest,
  NextApiResponse<ObjectStorageUploadResponse>
>().post(
  // check token
  async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1]
      if (!token) {
        throw new Error('Unauthorized')
      }

      const parsedToken = await admin.auth().verifyIdToken(token)
      const user_id =
        parsedToken['https://hasura.io/jwt/claims']?.['x-hasura-user-id']
      if (!user_id) {
        throw new Error('Unauthorized')
      }

      ;(req as any).user_id = Number(user_id)

      next()
    } catch (e) {
      res.status(401).json({ message: (e as Error).message ?? 'Invalid token' })
      throw e
    }
  },

  // upload to object storage
  upload.single('file'),

  // save metadata to db & respond
  async (req, res) => {
    if (!req.file) {
      res.status(400).json({ message: 'Failed to upload file' })
      return
    }
    if (!(req as any).user_id) {
      res.status(401).json({ message: 'Invalid token' })
      return
    }

    const {
      insert_files: { returning: hasuraFiles },
    } = await hasuraServerRequest<
      {
        insert_files: {
          returning: Pick<
            FileType,
            'id' | 'key' | 'url' | 'name' | 'type' | 'size'
          >[]
        }
      },
      { objects: Files_Insert_Input[] }
    >(
      gql`
        mutation UploadFile($objects: [files_insert_input!]!) {
          insert_files(objects: $objects) {
            returning {
              id
              key
              url
              name
              type
              size
            }
          }
        }
      `,
      {
        objects: [
          {
            user_id: (req as any).user_id,
            key: (req.file as any).key ?? (req.file as any).Key,
            url: encodeURI(
              `${process.env['SPACES_CDN_BASE_URL']}/${
                (req.file as any).key ?? (req.file as any).Key
              }`
            ),
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size,
          },
        ],
      }
    )
    const hasuraFile = hasuraFiles[0]
    if (!hasuraFile) {
      res.status(500).json({ message: 'Failed to upload file' })
      return
    }

    res.status(200).json({
      file: hasuraFile,
    })
  }
)

export default handler

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
