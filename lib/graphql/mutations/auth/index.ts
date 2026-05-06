import { gql } from "@apollo/client"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"

import {
  CheckPhoneNumberOrEmailExistResponse,
  CheckPhoneNumberOrEmailExistVariables,
} from "./types"

const CHECK_PHONE_NUMBER_EXIST_MUTATION: TypedDocumentNode<
  CheckPhoneNumberOrEmailExistResponse,
  CheckPhoneNumberOrEmailExistVariables
> = gql`
  mutation checkPhoneNumberOrEmailExist($phoneNumber: String!) {
    checkPhoneNumberOrEmailExist(phoneNumber: $phoneNumber) {
      result
      isSetPassword
      email
      secondary_phone_number
      lock_expired
      social_connected
    }
  }
`

export { CHECK_PHONE_NUMBER_EXIST_MUTATION }
