import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import { CartDropDownContainer } from '../CartDropDown';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart = jest.fn();
  const currentUser = {
    displayName: 'Anonymous Test',
    photoUrl: 'https://imgsrc.com/photo.jpg',
    uid: '123',
  };

  beforeEach(() => {
    const mockProps = {
      currentUser,
      signOutStart: mockSignOutStart,
      hidden: true,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  test('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render sign out Link if currentUser is present', () => {
    expect(
      wrapper
        .find('OptionLink')
        .at(2)
        .text(),
    ).toBe('SIGN OUT');
  });

  test('should call signOutStart method when link is clicked', () => {
    wrapper
      .find('OptionLink')
      .at(2)
      .simulate('click');
    expect(mockSignOutStart).toHaveBeenCalled();
  });

  test('should render sign in link if currentUser is null', () => {
    const mockProps = {
      hidden: true,
      currentUser: null,
      signOutStart: mockSignOutStart,
    };
    const wrapper = shallow(<Header {...mockProps} />);

    expect(
      wrapper
        .find('OptionLink')
        .at(2)
        .text(),
    ).toBe('SIGN IN');
  });

  test('it should not render CartDropDown if hidden prop is true', () => {
    expect(wrapper.exists(CartDropDownContainer)).toBeFalsy();
  });

  test('it should render CartDropDown if hidden prop is false', () => {
    const mockProps = {
      hidden: false,
      currentUser: null,
      signOutStart: mockSignOutStart,
    };

    const wrapper = shallow(<Header {...mockProps} />);

    expect(wrapper.exists(CartDropDownContainer)).toBeTruthy();
  });
});
