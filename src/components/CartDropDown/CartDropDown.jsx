import React from 'react';

import CartItem from '../CartItem';
import {
  CartDropDownContainer,
  CartItemsContainer,
  CartDropDownButton,
  EmptyMessageContainer,
} from './CartDropDown.styles';

function CartDropDown({ cartItems, history, toggleCartHidden }) {
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
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropDownButton>
    </CartDropDownContainer>
  );
}

export default CartDropDown;
