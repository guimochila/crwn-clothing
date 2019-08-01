import React from 'react';
import { Query } from 'react-apollo';

import Checkout from './Checkout';
import { GET_CART_ITEMS_AND_TOTAL } from '../../graphql/queries';

const CheckoutComposed = () => (
  <Query query={GET_CART_ITEMS_AND_TOTAL}>
    {({ data: { cartItems, cartTotal } }) => (
      <Checkout cartItems={cartItems} total={cartTotal} />
    )}
  </Query>
);

export default CheckoutComposed;
