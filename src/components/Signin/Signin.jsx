import React from 'react';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './Signin.styles';
import FormInput from '../FormInput';
import CustomButtom from '../CustomButtom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span className="sub-text">Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <ButtonsBarContainer>
            <CustomButtom type="submit">Sign In</CustomButtom>
            <CustomButtom
              type="submit"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButtom>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default Signin;
