import NextAuth, { CredentialsSignin, DefaultSession } from "next-auth"
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

  interface User extends Partial<Customer> {
    accessToken?: string
  }
}

class InvalidLoginError extends CredentialsSignin {
  code = "invalid_credentials"
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
        try {
          const { data } = await getClient().mutate({
            mutation: GENERATE_CUSTOMER_TOKEN_MUTATION,
            variables: {
              email: credentials.phoneNumber as string,
              password: credentials.password as string,
            },
          })

          const token = data?.generateCustomerToken?.token

          if (!token) throw new InvalidLoginError("Invalid credentials")

          const { data: customerProfileData } = await getClient().query({
            query: GET_CUSTOMER_PROFILE_QUERY,
            variables: { customerId: "" },
            context: { headers: { authorization: `Bearer ${token}` } },
          })

          const customer = customerProfileData?.customerProfile

          if (!customer) throw new InvalidLoginError("Invalid credentials")

          return { ...customer, accessToken: token }
        } catch (err) {
          if (err instanceof CredentialsSignin) throw err

          throw new InvalidLoginError("Invalid credentials")
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return user ? { ...token, ...user } : token
    },
    async session({ session, token }) {
      const { accessToken, firstname, lastname, avatar, account_type } = token
      session.token = accessToken as string
      Object.assign(session.user, { firstname, lastname, avatar, account_type })
      return session
    },
  },
})
