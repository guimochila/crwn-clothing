import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInView } from 'react-intersection-observer';

import './Checkout.scss';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem';
import StripeButton from '../../components/StripeButton';

export function Checkout({ cartItems, total }) {
  const [ref, inView] = useInView();

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div ref={ref} />
      <div className={`total ${inView ? '' : 'total-not-visible'}`}>
        <span>TOTAL: ${total}</span>
        <StripeButton price={total} />
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payment <br />
        4242-4242-4242-4242 - Exp: 01/20 CVV: 123
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
