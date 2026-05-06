interface CheckPhoneNumberOrEmailExistResponse {
  checkPhoneNumberOrEmailExist: {
    result: boolean
    isSetPassword: boolean
    email: string
    secondary_phone_number: string
    lock_expired: boolean
    social_connected: boolean
  }
}

interface CheckPhoneNumberOrEmailExistVariables {
  phoneNumber: string
}

export type {
  CheckPhoneNumberOrEmailExistResponse,
  CheckPhoneNumberOrEmailExistVariables,
}
