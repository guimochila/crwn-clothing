import React from 'react';
import { shallow } from 'enzyme';

import { Checkout } from './Checkout';

describe('Checkout Page', () => {
  test('should render Checkout page', () => {
    let mockProps = {
      cartItems: [],
      total: 100,
    };
    let wrapper = shallow(<Checkout {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
