import React from 'react';
import { SigninAndSignupContainer } from './SigninAndSignupPage.styles';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

function SigninAndSignupPage() {
  return (
    <SigninAndSignupContainer>
      <Signin />
      <Signup />
    </SigninAndSignupContainer>
  );
}

export default SigninAndSignupPage;
