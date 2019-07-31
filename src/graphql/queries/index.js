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
