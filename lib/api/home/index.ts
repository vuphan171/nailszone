"use server"

import { HomePageResponse, NewHomePage } from "@/types/home"

import { LoggerService } from "@/helpers/logger-service"

import { getClient } from "@/lib/graphql/apollo-client"
import {
  GET_HOMEPAGE_QUERY,
  GET_NEW_HOMEPAGE_QUERY,
} from "@/lib/graphql/queries/home"

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

const getHomePage = async (
  currentPage: number = 1
): Promise<HomePageResponse | null> => {
  try {
    const { data } = await getClient().query({
      query: GET_HOMEPAGE_QUERY,
      variables: { currentPage },
    })

    return data?.getHomepage ?? null
  } catch (error) {
    LoggerService.logError(error)
    return null
  }
}

export { getNewHomePage, getHomePage }
