import React, { useRef, useEffect } from 'react';

import CartItem from '../CartItem';
import {
  CartDropDownContainer,
  CartItemsContainer,
  CartDropDownButton,
  EmptyMessageContainer,
} from './CartDropDown.styles';
import { toggleCartHidden } from '../../store/cart/cart.actions';

function CartDropDown({ cartItems, history, dispatch }) {
  const container = useRef(null);

  useEffect(() => {
    const handleClickOutSide = event => {
      if (container.current && !container.current.contains(event.target)) {
        dispatch(toggleCartHidden());
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);

    return () => document.removeEventListener('mousedown', handleClickOutSide);
  }, [dispatch]);

  return (
    <CartDropDownContainer ref={container}>
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
