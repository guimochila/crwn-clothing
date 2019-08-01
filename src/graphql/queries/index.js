import { gql } from 'apollo-boost';

export const GET_COLLECTIONS = gql`
  query GET_COLLECTIONS {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const GET_COLLECTIONS_BY_TITLE = gql`
  query GET_COLLECTIONS_BY_TITLE($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const GET_CART_HIDDEN = gql`
  query GET_CART_HIDDEN {
    cartHidden @client
  }
`;

export const TOGGLE_CART_HIDDEN = gql`
  mutation TOGGLE_CART_HIDDEN {
    toggleCartHidden @client
  }
`;

export const GET_CART_ITEMS = gql`
  query GET_CART_ITEMS {
    cartItems @client
  }
`;

export const ADD_ITEM_TO_CART = gql`
  mutation ADD_ITEM_TO_CART($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

export const REMOVE_ITEM_FROM_CART = gql`
  mutation REMOVE_ITEM_FROM_CART($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

export const CLEAR_ITEM_FROM_CART = gql`
  mutation CLEAR_ITEM_FROM_CART($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

export const GET_ITEM_COUNT = gql`
  query GET_ITEM_COUNT {
    itemCount @client
  }
`;

export const GET_CART_ITEMS_AND_TOTAL = gql`
  query GET_CART_ITEMS_AND_TOTAL {
    cartItems @client
    cartTotal @client
  }
`;

export const GET_CART_TOTAL = gql`
  query GET_CART_TOTAL {
    cartTotal @client
  }
`;

export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    currentUser @client
  }
`;

export const SET_CURRENT_USER = gql`
  mutation SET_CURRENT_USER($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

export const GET_CLIENT_PROPERTIES = gql`
  query GET_CLIENT_PROPERTIES {
    cartHidden @client
    currentUser @client
  }
`;
