import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    users {
      id
      name
      email
      role
    }
  }
`;

export const LOAD_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      name
      role
      email
    }
  }
`;

export const LOAD_POSTS = gql`
  query {
    posts {
      id
      body
      user {
        id
        name
      }
    }
  }
`;
