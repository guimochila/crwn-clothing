import React from 'react';
import { shallow } from 'enzyme';

import SigninAndSignupPage from './SigninAndSignupPage';

describe('Signup and SignIn page', () => {
  test('should render SigninAndSignup page', () => {
    expect(shallow(<SigninAndSignupPage />)).toMatchSnapshot();
  });
});
