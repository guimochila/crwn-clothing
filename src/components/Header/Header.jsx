import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { selectCartHidden } from '../../store/cart/cart.selectors';
import { signOutStart } from '../../store/user/user.actions';
import CartIcon from '../CartIcon';
import { CartDropDownContainer } from '../CartDropDown';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HeaderWelcome,
  ProfileImageContainer,
  ProfileImage,
} from './Header.styles';

function Header({ currentUser, hidden, signOutStart }) {
  const { displayName, photoURL } = currentUser || {};

  const firstName = displayName ? displayName.split(' ')[0] : null;

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
        {firstName && <HeaderWelcome>Welcome {firstName}</HeaderWelcome>}
        <ProfileImageContainer>
          <ProfileImage photoURL={photoURL} />
        </ProfileImageContainer>
      </OptionsContainer>
      {hidden ? null : <CartDropDownContainer />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
