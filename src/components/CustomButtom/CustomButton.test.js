import React from 'react';
import { shallow } from 'enzyme';

import CustomButton from './CustomButton';
import {
  buttonStyles,
  invertedButtonStyles,
  googleSignInStyles,
  getButtonStyles,
} from './CustomButton.styles';

describe('CustomButton component', () => {
  test('should render CustomButton component', () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
  });

  test('should return googleSignInStyles when prop isGoogleSignin is passed', () => {
    expect(getButtonStyles({ isGoogleSignIn: true })).toEqual(
      googleSignInStyles,
    );
  });

  test('should return invertedButtonStyles when inverted prop is passed', () => {
    expect(getButtonStyles({ inverted: true })).toEqual(invertedButtonStyles);
  });

  test('should return buttonStyles when no props are passed', () => {
    expect(getButtonStyles({})).toEqual(buttonStyles);
  });
});
