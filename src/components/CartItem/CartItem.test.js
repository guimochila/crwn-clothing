import React from 'react';
import { shallow } from 'enzyme';

import CartItem from './CartItem';

describe('CartItem Component', () => {
  test('it should render CartItem', () => {
    const mockProps = {
      item: {
        imageUrl: 'http://imgsrc.com/image',
        price: 21,
        name: 'Testing',
        quantity: 1,
      },
    };

    const wrapper = shallow(<CartItem {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
