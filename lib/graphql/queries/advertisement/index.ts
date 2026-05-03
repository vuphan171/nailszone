import { gql } from "@apollo/client"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"

import {
  GetListAdvertisementResponse,
  GetListAdvertisementVariables,
} from "@/lib/graphql/queries/advertisement/types"

const GET_LIST_ADVERTISEMENT_QUERY: TypedDocumentNode<
  GetListAdvertisementResponse,
  GetListAdvertisementVariables
> = gql`
  query getAdsList(
    $currentPage: Int
    $pageSize: Int!
    $filter: AdsListFilterMapInput
    $sort: [AdsSortInput]
  ) {
    getAdsList(
      currentPage: $currentPage
      pageSize: $pageSize
      filter: $filter
      sort: $sort
    ) {
      items {
        advertisement_id
        type
        status
        enable
        customer_id
        title
        salon_address
        postal_code
        country
        city
        state
        salary {
          split_fixed_salary {
            split
            fixed
          }
          negotiation
        }
        price {
          price
          negotiation
        }
        description
        created_at
        lat
        lng
        gallery {
          image
          image_url
        }
        customer {
          email
          firstname
          lastname
        }
        contact {
          ads_apply_id
          name
          avatar
        }
        favorites_id
        url_key
      }
      page_info {
        page_size
        current_page
        total_page
      }
    }
  }
`

export { GET_LIST_ADVERTISEMENT_QUERY }
