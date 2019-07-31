import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { resolvers, typeDefs } from './graphql/resolvers';

const INITIAL_STATE = {
  cartHidden: true,
};

function configureHttpLink(uri) {
  return createHttpLink({
    uri,
  });
}

function configureCache() {
  return new InMemoryCache();
}

function configureApollo() {
  const httpLink = configureHttpLink('https://crwn-clothing.com/');
  const cache = configureCache();

  // Setting up the local state
  cache.writeData({ data: INITIAL_STATE });

  return new ApolloClient({
    link: httpLink,
    cache,
    resolvers,
    typeDefs,
  });
}

export default configureApollo;
