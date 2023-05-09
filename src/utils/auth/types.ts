export enum BusinessSize {
  INDIVIDUAL = 'INDIVIDUAL',
  LOCAL_BUSINESS = 'LOCAL_BUSINESS',
  NATIONAL_BUSINESS = 'NATIONAL_BUSINESS',
}

export type AuthSignUpOnHasuraInput = {
  idToken: string

  zip_code_id: number

  full_name: string

  business_size: keyof typeof BusinessSize
  business_name?: string | null
}

export type AuthSetCustomClaimsInput = {
  idToken: string
}
