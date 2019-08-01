import React from 'react';
import { compose, graphql } from 'react-apollo';

import CheckoutItem from './CheckoutItem';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
} from '../../graphql/queries';

const CheckoutItemComposed = ({
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  ...otherProps
}) => (
  <CheckoutItem
    {...otherProps}
    addItem={item => addItemToCart({ variables: { item } })}
    removeItem={item => removeItemFromCart({ variables: { item } })}
    clearItem={item => clearItemFromCart({ variables: { item } })}
  />
);

export default compose(
  graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }),
  graphql(REMOVE_ITEM_FROM_CART, { name: 'removeItemFromCart' }),
  graphql(CLEAR_ITEM_FROM_CART, { name: 'clearItemFromCart' }),
)(CheckoutItemComposed);
