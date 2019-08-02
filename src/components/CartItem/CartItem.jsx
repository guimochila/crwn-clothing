import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemName,
} from './CartItem.styles';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default React.memo(CartItem);
