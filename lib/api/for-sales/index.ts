"use server"

import CACHE_KEYS from "@/configs/cache-keys"
import CACHE_TIMES from "@/configs/cache-times"

import { Advertisement, ADVERTISEMENT_TYPES } from "@/types/advertisement"
import { SORT_DIRECTIONS } from "@/types/sort-direction"

import { LoggerService } from "@/helpers/logger-service"

import { getClient } from "@/lib/graphql/apollo-client"
import {
  GET_ADVERTISEMENT_DETAIL_QUERY,
  GET_LIST_ADVERTISEMENT_QUERY,
} from "@/lib/graphql/queries/advertisement"

const getTopForSales = async (
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
          is_pinned: true,
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
            revalidate: CACHE_TIMES.TOP_FOR_SALES,
            tags: [CACHE_KEYS.TOP_FOR_SALES],
          },
        },
      },
    })

    return data?.getAdsList?.items || []
  } catch (error) {
    LoggerService.logError(error)
    return []
  }
}

const getForSaleDetail = async (
  url_key: string
): Promise<Advertisement | null> => {
  try {
    const { data } = await getClient().query({
      query: GET_ADVERTISEMENT_DETAIL_QUERY,
      variables: { url_key },
    })
    return data?.adsDetail || null
  } catch (error) {
    LoggerService.logError(error)
    return null
  }
}

export { getTopForSales, getForSaleDetail }
