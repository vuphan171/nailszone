import { auth } from "@/auth"
import { HttpLink } from "@apollo/client"
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs"
import { SetContextLink } from "@apollo/client/link/context"

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "app-version": "1.0",
  },
  fetchOptions: {
    cache: "no-store",
  },
})

const authLink = new SetContextLink(async (prevContext) => {
  const session = await auth()
  return {
    headers: {
      ...prevContext.headers,
      authorization:
        prevContext.headers?.authorization ||
        (session?.token ? `Bearer ${session.token}` : ""),
    },
  }
})

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
  })
})
