import { gql } from "@apollo/client"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"

import {
  GetListAdvertisementResponse,
  GetListAdvertisementVariables,
  GetAdvertisementDetailResponse,
  GetAdvertisementDetailVariables,
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

const GET_ADVERTISEMENT_DETAIL_QUERY: TypedDocumentNode<
  GetAdvertisementDetailResponse,
  GetAdvertisementDetailVariables
> = gql`
  query adsDetail($url_key: String!) {
    adsDetail(url_key: $url_key) {
      advertisement_id
      type
      status
      enable
      customer_id
      title
      salon_address
      city
      postal_code
      country
      salon_id
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
      gallery {
        image
        image_url
      }
      customer {
        email
        firstname
        lastname
        avatar
        url_key
      }
      favorites_id
      contact {
        ads_apply_id
        customer_id
        email
        message
        is_contact
        phone
        avatar
        created_at
        name
        url_key
      }
      url_key
    }
  }
`

export { GET_LIST_ADVERTISEMENT_QUERY, GET_ADVERTISEMENT_DETAIL_QUERY }
