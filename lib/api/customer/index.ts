"use server"

import { cache } from "react"

import { cookies } from "next/headers"

import { auth, signOut } from "@/auth"
import { getCookie } from "cookies-next/server"

import { COOKIE_KEYS } from "@/configs/cookies"

import { Customer } from "@/types/customer"

import { LoggerService } from "@/helpers/logger-service"

import { getClient } from "@/lib/graphql/apollo-client"
import { GET_CUSTOMER_PROFILE_QUERY } from "@/lib/graphql/queries/customer"

const getCustomerProfile = cache(
  async (customerId?: string): Promise<Customer | null> => {
    try {
      const token = await getCookie(COOKIE_KEYS.USER_TOKEN, { cookies })

      if (!token) return null

      const { data } = await getClient().query({
        query: GET_CUSTOMER_PROFILE_QUERY,
        variables: {
          customerId: customerId || "",
        },
      })

      const customerProfile = data?.customerProfile || null

      if (!customerProfile) {
        await signOut()
        return null
      }

      return data?.customerProfile || null
    } catch (error) {
      LoggerService.logError(error)
      return null
    }
  }
)

export { getCustomerProfile }
