import React from 'react';
import { connect } from 'react-redux';

import './CartDropDown.scss';
import CustomButton from '../CustomButtom';
import CartItem from '../CartItem';
import { selectCartItems } from '../../store/cart/cart.selectors';

function CartDropDown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
