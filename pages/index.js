import React from 'react'
import { ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-boost'
import { InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { ApolloProvider } from 'react-apollo'

// Apollo Client
if (!process.browser) {
  global.fetch = fetch
}

const URI_ENDPOINT = 'http://localhost:3001/graphql'
function createClient(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: URI_ENDPOINT, // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

// Apollo
const client = createClient()

const GET_USER = gql`
  {
    user {
      id
      name
    }
  }
`

// Component
export default () => {
  return (
    <ApolloProvider client={client}>
      <Query query={GET_USER}>
        {props => {
          if (props.loading) {
            return 'Loading...'
          }
          return `Hello, ${props.data.user.name}`
        }}
      </Query>
    </ApolloProvider>
  )
}
