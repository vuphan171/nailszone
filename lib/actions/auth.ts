"use server"

import { cookies } from "next/headers"

import { setCookie } from "cookies-next/server"

import { COOKIE_CONFIGS, COOKIE_KEYS } from "@/configs/cookies"

import { LoggerService } from "@/helpers/logger-service"

import { getClient } from "@/lib/graphql/apollo-client"
import { GENERATE_CUSTOMER_TOKEN_MUTATION } from "@/lib/graphql/mutations/auth"

const generateCustomerToken = async (
  phoneNumber: string,
  password: string
): Promise<{ success: boolean; error: string | null }> => {
  try {
    const { data } = await getClient().mutate({
      mutation: GENERATE_CUSTOMER_TOKEN_MUTATION,
      variables: {
        email: phoneNumber,
        password: password,
      },
    })

    console.log(data)

    const token = data?.generateCustomerToken?.token

    if (token) {
      await setCookie(COOKIE_KEYS.USER_TOKEN, token, {
        cookies,
        maxAge: COOKIE_CONFIGS.maxAge,
      })
      return { success: true, error: null }
    }

    return { success: false, error: "Failed to generate customer token" }
  } catch (error) {
    LoggerService.logError(error)
    return { success: false, error: "Failed to generate customer token" }
  }
}

export { generateCustomerToken }
