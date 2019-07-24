import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CartDropDown from './CartDropDown';
import { selectCartItems } from '../../store/cart/cart.selectors';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropDownContainer = compose(
  withRouter,
  connect(mapStateToProps),
)(CartDropDown);

export default CartDropDownContainer;
