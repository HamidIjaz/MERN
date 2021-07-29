import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $email: String!, $role: String!) {
    createUser(name: $name, email: $email, role: $role) {
      id
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!, $userId: String!) {
    createPost(body: $body, userId: $userId) {
      id
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($id: String!, $name: String!) {
    updateUser(id: $id, name: $name)
  }
`;
