import { gql } from 'apollo-boost';
import {
  GET_CART_HIDDEN,
  GET_CART_ITEMS,
  GET_ITEM_COUNT,
  GET_CART_TOTAL,
  GET_CURRENT_USER,
} from './queries';
import {
  addItemToCart as addItemToCartUtils,
  getCartItemCount,
  getCartItemsTotal,
  removeItemFromCart,
  clearItemFromCart,
} from './utils/cart.utils';

export const typeDefs = gql`
  extend type Mutation {
    toggleCartHidden: Boolean!
    addItemToCart(item: Item!): [Item]!
    removeItemFromCart(item: Item!): [Item]!
    clearItemFromCart(item: Item!): [Item]!
    setCurrentUser(user: User!): User!
  }

  extend type Item {
    quantity: Int
  }

  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }

  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }
`;

const updateCartItemsRelatedQueries = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) },
  });

  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: { cartTotal: getCartItemsTotal(newCartItems) },
  });

  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems },
  });
};

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
    addItemToCart(_, { item }, { cache }) {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCartUtils(cartItems, item);

      updateCartItemsRelatedQueries(cache, newCartItems);

      return newCartItems;
    },
    removeItemFromCart(_, { item }, { cache }) {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = removeItemFromCart(cartItems, item);

      updateCartItemsRelatedQueries(cache, newCartItems);

      return newCartItems;
    },
    clearItemFromCart(_, { item }, { cache }) {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = clearItemFromCart(cartItems, item);

      updateCartItemsRelatedQueries(cache, newCartItems);

      return newCartItems;
    },
    setCurrentUser(_, { user }, { cache }) {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user },
      });

      return user;
    },
  },
};
