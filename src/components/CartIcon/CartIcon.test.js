import React from 'react';
import { shallow } from 'enzyme';

import { CartIcon } from './CartIcon';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      toggleCartHidden: mockToggleCartHidden,
      itemCount: -0,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  test('it should render CartIcon', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call toggleCartHidden when clicked', () => {
    wrapper.find('CartIconContainer').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalledTimes(1);
  });

  test('should render itemCount as a text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    expect(itemCount).toBe(0);
  });
});
