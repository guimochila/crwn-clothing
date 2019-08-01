import React from 'react';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CartIcon.styles';

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
}

export default CartIcon;
