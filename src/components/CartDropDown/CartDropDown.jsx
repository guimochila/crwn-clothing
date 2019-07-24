import React from 'react';

import CartItem from '../CartItem';
import {
  CartDropDownContainer,
  CartItemsContainer,
  CartDropDownButton,
  EmptyMessageContainer,
} from './CartDropDown.styles';
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

export default CartDropDown;
