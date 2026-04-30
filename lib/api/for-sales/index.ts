"use server"

import { getClient } from "@/lib/graphql/apollo-client"
import { GET_LIST_ADVERTISEMENT_QUERY } from "@/lib/graphql/queries/advertisement"
import { Advertisement, ADVERTISEMENT_TYPES } from "@/types/advertisement"
import { SORT_DIRECTIONS } from "@/types/sort-direction"
import CACHE_TIMES from "@/configs/cache-times"
import CACHE_KEYS from "@/configs/cache-keys"

const getForSales = async (
  pageSize: number = 10,
  currentPage: number = 1
): Promise<Advertisement[]> => {
  try {
    const { data } = await getClient().query({
      query: GET_LIST_ADVERTISEMENT_QUERY,
      variables: {
        pageSize,
        filter: {
          type: ADVERTISEMENT_TYPES.FOR_SALES,
        },
        currentPage,
        sort: [
          {
            created_at: SORT_DIRECTIONS.DESC,
          },
        ],
      },
      context: {
        fetchOptions: {
          cache: "force-cache",
          next: {
            revalidate: CACHE_TIMES.FOR_SALES,
            tags: [CACHE_KEYS.FOR_SALES],
          },
        },
      },
    })

    return data?.getAdsList?.items || []
  } catch (error) {
    console.error(error)
    return []
  }
}

export { getForSales }
