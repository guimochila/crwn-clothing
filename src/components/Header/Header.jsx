import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { default as CartIcon } from '../CartIcon';
import { CartDropDownComposed as CartDropDown } from '../CartDropDown';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HeaderWelcome,
  ProfileImageContainer,
  ProfileImage,
} from './Header.styles';
import { auth } from '../../firebase/firebase.utils';

function Header({ currentUser, hidden }) {
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
          <OptionLink as="div" onClick={() => auth.signOut()}>
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
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
}

export default Header;
