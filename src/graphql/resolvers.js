import { gql } from 'apollo-boost';
import { GET_CART_HIDDEN } from './queries';

export const typeDefs = gql`
  extend type Mutation {
    toggleCartHidden: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden(_, __, { cache }) {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });

      return !cartHidden;
    },
  },
};
