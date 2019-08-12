import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './CheckoutItem';

describe('CheckoutItem component', () => {
  let wrapper;
  const mockCartItem = {
    name: 'Brown Hat',
    imageUrl: 'https://imgsrc.com/brownhat.jpg',
    price: 100,
    quantity: 2,
  };
  const clearItem = jest.fn();
  const addItem = jest.fn();
  const removeItem = jest.fn();

  beforeEach(() => {
    const mockProps = {
      cartItem: mockCartItem,
      clearItem,
      addItem,
      removeItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  test('it should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should call removeItem when click in remove', () => {
    wrapper.find('[data-testid="removeItem"]').simulate('click');
    expect(removeItem).toHaveBeenCalledWith(mockCartItem);
  });

  test('it should call addItem when click in add', () => {
    wrapper.find('[data-testid="addItem"]').simulate('click');
    expect(addItem).toHaveBeenCalledWith(mockCartItem);
  });

  test('it should call clearItem when click in the clear button', () => {
    wrapper.find('[data-testid="clearItem"]').simulate('click');
    expect(clearItem).toHaveBeenLastCalledWith(mockCartItem);
  });
});
