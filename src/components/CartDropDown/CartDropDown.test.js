import React from 'react';
import { shallow } from 'enzyme';

import CartDropDown from './CartDropDown';
import CartItem from '../CartItem';

import { toggleCartHidden } from '../../store/cart/cart.actions';

describe('CardDropDown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      dispatch: mockDispatch,
      history: mockHistory,
    };

    wrapper = shallow(<CartDropDown {...mockProps} />);
  });

  test('should render CardDropDown', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call history.push when button is clicked', () => {
    wrapper.find('CartDropDownButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  test('should render the number of CartItems components equal the cartItem props', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  test('should render EmptyMessage when cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch,
    };
    const newWrapper = shallow(<CartDropDown {...mockProps} />);
    expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
  });
});
