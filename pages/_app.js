import React from "react";
import { Container } from "next/app";
import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import { ApolloProvider } from "react-apollo";

const IS_BROWSER = !!process.browser;

// Apollo Client
if (!IS_BROWSER) {
  global.fetch = fetch;
}

const URI_ENDPOINT = "http://localhost:3001/graphql";
function createClient(initialState) {
  return new ApolloClient({
    connectToDevTools: IS_BROWSER,
    ssrMode: !IS_BROWSER, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: URI_ENDPOINT, // Server URL (must be absolute)
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

const client = createClient();

export default props => {
  const { Component, pageProps, apolloClient } = props;
  return (
    <Container>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  );
};
