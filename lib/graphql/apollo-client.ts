import { HttpLink } from "@apollo/client"
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs"

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "app-version": "1.0",
    // authorization: `Bearer ${process.env.API_TOKEN}`,
  },
  fetchOptions: {
    cache: "no-store",
  },
})

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  })
})
