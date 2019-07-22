import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem';
import {
  CartDropDownContainer,
  CartItemsContainer,
  CartDropDownButton,
  EmptyMessageContainer,
} from './CartDropDown.styles';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { toggleCartHidden } from '../../store/cart/cart.actions';

function CartDropDown({ cartItems, history, dispatch }) {
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropDownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropDownButton>
    </CartDropDownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
