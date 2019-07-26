import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './Signin.styles';
import FormInput from '../FormInput';
import CustomButtom from '../CustomButtom';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.actions';

function Signin({ emailSignInStart, googleSignInStart }) {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span className="sub-text">Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        />

        <ButtonsBarContainer>
          <CustomButtom type="submit">Sign In</CustomButtom>
          <CustomButtom
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButtom>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(
  null,
  mapDispatchToProps,
)(Signin);
