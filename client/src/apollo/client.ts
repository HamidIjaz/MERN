import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLError, GraphQLFormattedError } from "graphql";

const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }: any) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;
