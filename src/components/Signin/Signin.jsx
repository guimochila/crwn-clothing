import React, { useState } from 'react';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './Signin.styles';
import FormInput from '../FormInput';
import CustomButtom from '../CustomButtom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

function Signin() {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userCredentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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
          <CustomButtom type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButtom>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

export default Signin;
