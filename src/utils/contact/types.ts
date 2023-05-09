export type ContactMessageInput = {
  full_name: string
  email: string
  message: string
}

export type ContactMessageResponse =
  | { success: true }
  | { success: false; error: string }
