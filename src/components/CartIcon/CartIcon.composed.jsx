import React from 'react';
import { Mutation } from 'react-apollo';

import CartIcon from './CartIcon';
import { TOGGLE_CART_HIDDEN } from '../../graphql/queries';

const CartIconComposed = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />}
  </Mutation>
);

export default CartIconComposed;
