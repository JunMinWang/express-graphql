const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require("graphql");

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  } 
`);

// Root resolver
const root = {
  message: () => `Hello world!`,
};

// Create an express server and a graphql endpoint
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => console.log(`Server is running!`))
