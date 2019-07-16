import React from 'react';
import './SigninAndSignupPage.scss';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

function SigninAndSignupPage() {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
}

export default SigninAndSignupPage;
