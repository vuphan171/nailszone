import { gql } from "@apollo/client"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"

import {
  CheckPhoneNumberOrEmailExistResponse,
  CheckPhoneNumberOrEmailExistVariables,
  GenerateCustomerTokenResponse,
  GenerateCustomerTokenVariables,
} from "./types"

const CHECK_PHONE_NUMBER_EXIST_MUTATION: TypedDocumentNode<
  CheckPhoneNumberOrEmailExistResponse,
  CheckPhoneNumberOrEmailExistVariables
> = gql`
  mutation checkPhoneNumberOrEmailExist($phoneNumber: String!) {
    checkPhoneNumberOrEmailExist(account: $phoneNumber) {
      result
      isSetPassword
      email
      secondary_phone_number
      lock_expired
      social_connected
    }
  }
`

const GENERATE_CUSTOMER_TOKEN_MUTATION: TypedDocumentNode<
  GenerateCustomerTokenResponse,
  GenerateCustomerTokenVariables
> = gql`
  mutation generateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
      lock_expired
    }
  }
`

export { CHECK_PHONE_NUMBER_EXIST_MUTATION, GENERATE_CUSTOMER_TOKEN_MUTATION }
