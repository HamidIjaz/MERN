const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server
  .listen()
  .then(({}) => console.log("Server is running on http://localhost:4000"));
