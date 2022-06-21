import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(import.meta.env)

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URL,
  cache: new InMemoryCache()
})