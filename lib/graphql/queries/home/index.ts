import { gql } from "@apollo/client"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"
import { GetNewHomePageResponse } from "@/lib/graphql/queries/home/types"

const GET_NEW_HOMEPAGE_QUERY: TypedDocumentNode<GetNewHomePageResponse> = gql`
  query getNewHomepage {
    getNewHomepage {
      event_list {
        items {
          event_id
          url_key
          title
          status
          image
          image_url
          link_live_stream
          time_start
          time_end
          duration
          customer_id
          description
          created_at
          event_trigger {
            event_trigger_id
            sku
            event_id
            trigger_time
            name
            description
          }
          customer {
            email
            firstname
            lastname
            avatar
            url_key
          }
          remindMe_id
          moderator {
            moderator_id
          }
          add_calendar
          admin_id
        }
      }
      jobs_list {
        items {
          advertisement_id
          type
          status
          url_key
          enable
          customer_id
          title
          salon_address
          city
          postal_code
          country
          state
          lat
          lng
          salary {
            split_fixed_salary {
              split
              fixed
            }
            negotiation
          }
          description
          created_at
          gallery {
            image
            image_url
            image_bot
          }
          customer {
            email
            firstname
            lastname
          }
          favorites_id
          salon_id
        }
      }
      forsales_list {
        items {
          advertisement_id
          type
          status
          url_key
          enable
          customer_id
          title
          salon_address
          city
          postal_code
          country
          state
          lat
          lng
          price {
            price
            negotiation
          }
          description
          created_at
          gallery {
            image
            image_url
            image_bot
          }
          customer {
            email
            firstname
            lastname
          }
          favorites_id
          salon_id
        }
      }
      votes_list {
        items {
          id
          name
          status
          url_key
          description
          application_start_time
          application_end_time
          voting_start_time
          voting_end_time
          banner
          total_apply
          created_at
          updated_at
          nailsmaster_apply {
            id
            firstname
            lastname
            avatar
            url_key
            status
            introduction
            comment
            images_apply {
              name
              url
            }
            position
            total_vote
          }
          is_apply_vote
          user_voted_list
        }
      }
    }
  }
`

export { GET_NEW_HOMEPAGE_QUERY }
