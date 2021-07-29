export {};
const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    role: String!
    posts: [Post!]!
  }
  type Post {
    id: String!
    body: String!
    user: User!
  }
  type Query {
    user(id: String!): User
    users: [User]
    posts: [Post]
    post(id: String!): Post
  }
  type Mutation {
    createUser(name: String!, email: String!, role: String!): User!
    updateUser(id: String, name: String): String!
    deleteUser(id: String): String!
    createPost(body: String!, userId: String!): Post!
    # deletePost(id: String): String!
  }
`;

module.exports = typeDefs;
