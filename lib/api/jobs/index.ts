"use server"

import { getClient } from "@/lib/graphql/apollo-client"
import { GET_LIST_ADVERTISEMENT_QUERY } from "@/lib/graphql/queries/advertisement"
import { Advertisement, ADVERTISEMENT_TYPES } from "@/types/advertisement"
import { SORT_DIRECTIONS } from "@/types/sort-direction"

const getJobs = async (
  pageSize: number = 10,
  currentPage: number = 1
): Promise<Advertisement[]> => {
  try {
    const { data } = await getClient().query({
      query: GET_LIST_ADVERTISEMENT_QUERY,
      variables: {
        pageSize,
        filter: {
          type: ADVERTISEMENT_TYPES.JOB,
        },
        currentPage,
        sort: [
          {
            created_at: SORT_DIRECTIONS.DESC,
          },
        ],
      },
    })

    return data?.getAdsList?.items || []
  } catch (error) {
    console.error(error)
    return []
  }
}

export { getJobs }
