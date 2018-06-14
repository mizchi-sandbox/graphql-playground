const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require("graphql-tools");
const cors = require("cors");
const resolvers = require("./resolvers");
const mocks = require("./mocks");

const schema = makeExecutableSchema({
  typeDefs: fs
    .readFileSync(path.join(__dirname, "../schema.graphql"))
    .toString()
  // resolvers
});

// mock it
addMockFunctionsToSchema({ schema, mocks });

// Initialize the app
const app = express();

app.use(cors());

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen(3001);
