import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';

import CartIcon from './CartIcon';
import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNT } from '../../graphql/queries';

const Composed = adopt({
  toggleCartHidden: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={GET_ITEM_COUNT}>{render}</Query>,
});

const CartIconComposed = () => (
  <Composed>
    {({ toggleCartHidden, localState }) => (
      <CartIcon
        toggleCartHidden={toggleCartHidden}
        itemCount={localState.data.itemCount}
      />
    )}
  </Composed>
);

export default CartIconComposed;
