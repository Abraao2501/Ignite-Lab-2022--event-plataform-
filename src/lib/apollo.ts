import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client/core";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization' : `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },

  cache: new InMemoryCache()
}) 