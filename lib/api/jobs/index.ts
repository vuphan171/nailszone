"use server"

import { Advertisement, ADVERTISEMENT_TYPES } from "@/types/advertisement"
import { SORT_DIRECTIONS } from "@/types/sort-direction"

import { LoggerService } from "@/helpers/logger-service"

import { getClient } from "@/lib/graphql/apollo-client"
import {
  GET_ADVERTISEMENT_DETAIL_QUERY,
  GET_LIST_ADVERTISEMENT_QUERY,
} from "@/lib/graphql/queries/advertisement"

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

const getJobDetail = async (url_key: string): Promise<Advertisement | null> => {
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

export { getJobs, getJobDetail }
