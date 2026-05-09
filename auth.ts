import NextAuth, { DefaultSession } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { Customer } from "@/types/customer"

import { getClient } from "@/lib/graphql/apollo-client"
import { GENERATE_CUSTOMER_TOKEN_MUTATION } from "@/lib/graphql/mutations/auth"
import { GET_CUSTOMER_PROFILE_QUERY } from "@/lib/graphql/queries/customer"

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string
    user: Customer & DefaultSession["user"]
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        phoneNumber: {},
        password: {},
      },
      async authorize(credentials) {
        const { data } = await getClient().mutate({
          mutation: GENERATE_CUSTOMER_TOKEN_MUTATION,
          variables: {
            email: credentials.phoneNumber as string,
            password: credentials.password as string,
          },
        })

        const token = data?.generateCustomerToken?.token

        if (!token) {
          throw new Error("Invalid credentials.")
        }

        const { data: customerProfileData } = await getClient().query({
          query: GET_CUSTOMER_PROFILE_QUERY,
          variables: {
            customerId: "",
          },
          context: {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        })

        const customer = customerProfileData?.customerProfile || null

        if (!customer) {
          throw new Error("Invalid credentials.")
        }

        return {
          ...customer,
          accessToken: token,
        }
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.accessToken = user.accessToken
  //     }
  //     return token
  //   },
  //   async session({ session, token }) {
  //     console.log("session token", token)
  //     session.token = token.accessToken as string
  //     return session
  //   },
  // },
})
