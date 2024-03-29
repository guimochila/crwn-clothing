import React from 'react';
import { connect } from 'react-redux';

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  TextContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../store/cart/cart.actions';

export function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div data-testid="removeItem" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div data-testid="addItem" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        data-testid="clearItem"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CheckoutItem);
