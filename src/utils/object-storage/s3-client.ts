import AWS from 'aws-sdk'

const endpoint = new AWS.Endpoint(process.env['SPACES_ENDPOINT']!)

export const s3 = new AWS.S3({
  endpoint,
  accessKeyId: process.env['SPACES_KEY'],
  secretAccessKey: process.env['SPACES_SECRET'],

  s3ForcePathStyle: true,
  signatureVersion: 'v4',
})
