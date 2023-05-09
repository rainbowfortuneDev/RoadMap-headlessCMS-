import admin from 'firebase-admin'

export function initFirebaseAdmin() {
  if (admin.apps.length) {
    return
  }

  const projectId = process.env['FIREBASE_PROJECT_ID']
  if (!projectId) {
    throw new Error('FIREBASE_PROJECT_ID is not defined')
  }
  const privateKey = process.env['FIREBASE_PRIVATE_KEY']
  if (!privateKey) {
    throw new Error('FIREBASE_PRIVATE_KEY is not defined')
  }
  const clientEmailName = process.env['FIREBASE_CLIENT_EMAIL_NAME']
  if (!clientEmailName) {
    throw new Error('FIREBASE_CLIENT_EMAIL_NAME is not defined')
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      privateKey: `-----BEGIN PRIVATE KEY-----\n${privateKey.replace(
        /\\n/g,
        '\n'
      )}\n-----END PRIVATE KEY-----\n`,
      clientEmail: `${clientEmailName}@${projectId}.iam.gserviceaccount.com`,
    }),
  })
}
