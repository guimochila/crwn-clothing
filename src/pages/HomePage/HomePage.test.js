import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

it('should render HomePage component', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
