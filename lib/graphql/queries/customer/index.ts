import { gql } from "@apollo/client"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"

import {
  GetCustomerProfileResponse,
  GetCustomerProfileVariables,
} from "@/lib/graphql/queries/customer/types"

const GET_CUSTOMER_PROFILE_QUERY: TypedDocumentNode<
  GetCustomerProfileResponse,
  GetCustomerProfileVariables
> = gql`
  query customerProfile($customerId: String) {
    customerProfile(customerId: $customerId) {
      account_type
      avatar
      firstname
      lastname
      authentication_status
      account_type
      description
      phone_number
      secondary_phone_number
      email
      secondary_mail
      location
      is_salon_owner
      is_verify_email
      salon_owner_status
      receive_sms
      receive_email
      social {
        social_customer_id
        social_id
        username
        type
        email
      }
      setup_password_yet
      certificates {
        file
        link
        review_status
      }
      addresses {
        id
        city
        country_code
        street
        postcode
        region {
          region
          region_code
          region_id
        }
      }
      seller_id
      url_key
    }
  }
`

export { GET_CUSTOMER_PROFILE_QUERY }
