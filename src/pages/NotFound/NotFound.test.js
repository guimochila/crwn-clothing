import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

it('it should render NotFound component', () => {
  expect(shallow(<NotFound />)).toMatchSnapshot();
});
