import type { Files as FileType } from '../../generated/graphql'

export type ObjectStorageUploadResponse =
  | { file: Pick<FileType, 'id' | 'key' | 'url' | 'name' | 'type' | 'size'> }
  | { message: string } // for errors
