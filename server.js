const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { getCourse, getCourses } = require("./service");

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String!): [Course]
  } 
  
  type Course {
    id: Int
    title: String
    author: String
    topic: String
    description: String
    url: String
  }
`);

// Root resolver
const root = {
  course: getCourse,
  courses: getCourses,
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

app.listen(3000, () => console.log(`Server is running!`));
