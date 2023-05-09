import type { Files as FileType } from '../../generated/graphql'

export async function upload(file: File, token: string) {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch('/api/object-storage/upload', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  })
  return (await response.json()) as {
    file: Pick<FileType, 'id' | 'key' | 'url' | 'name' | 'type' | 'size'>
  }
}
