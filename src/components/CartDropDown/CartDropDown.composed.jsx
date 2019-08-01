import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';

import CartDropDown from './CartDropDown';
import { TOGGLE_CART_HIDDEN, GET_CART_ITEMS } from '../../graphql/queries';

const Composed = adopt({
  toggleCartHidden: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={GET_CART_ITEMS}>{render}</Query>,
});

const CartDropDownComposed = props => (
  <Composed>
    {({ toggleCartHidden, localState }) => {
      const { cartItems } = localState.data;

      return (
        <CartDropDown
          toggleCartHidden={toggleCartHidden}
          cartItems={cartItems}
          {...props}
        />
      );
    }}
  </Composed>
);

export default withRouter(CartDropDownComposed);
