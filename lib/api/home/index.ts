"use server"

import { NewHomePage } from "@/types/home"

import { LoggerService } from "@/helpers/logger-service"

import { getClient } from "@/lib/graphql/apollo-client"
import { GET_NEW_HOMEPAGE_QUERY } from "@/lib/graphql/queries/home"

const getNewHomePage = async (): Promise<NewHomePage | null> => {
  try {
    const { data } = await getClient().query({
      query: GET_NEW_HOMEPAGE_QUERY,
    })

    return data?.getNewHomepage ?? null
  } catch (error) {
    LoggerService.logError(error)
    return null
  }
}

export { getNewHomePage }
