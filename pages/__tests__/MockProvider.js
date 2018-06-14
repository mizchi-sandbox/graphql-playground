import React from "react";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import { ApolloClient } from "apollo-client";
import { ApolloProvider, Query } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import typeDefs from "../../schema.graphql";
import mocks from "../../graphql-server/mocks";

import { MockedProvider } from "react-apollo/test-utils";

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({
  schema,
  mocks
});

const client = new ApolloClient({
  ssrMode: true,
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});

export default ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
