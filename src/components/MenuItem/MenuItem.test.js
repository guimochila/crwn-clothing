import React from 'react';
import { mount } from 'enzyme';

import { MenuItem } from './MenuItem';
import { tsThisType } from '@babel/types';

describe('MenuItem component', () => {
  let wrapper;
  const mockProps = {
    linkUrl: '/hats',
    size: 'large',
    imageUrl: 'https://imgsrc.com/hats',
    match: {
      url: '/shop',
    },
    title: 'Hats',
  };

  beforeEach(() => {
    mockProps.history = {
      push: jest.fn(),
    };

    wrapper = mount(<MenuItem {...mockProps} />);
  });

  test('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call history.push when MenuItemContainer clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click');

    expect(mockProps.history.push).toHaveBeenCalledWith(
      `${mockProps.match.url}${mockProps.linkUrl}`,
    );
  });

  test('should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(mockProps.size);
    expect(wrapper.find('MenuItemContainer')).toHaveStyleRule(
      'height',
      '380px',
    );
  });

  test('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(
      mockProps.imageUrl,
    );
    expect(wrapper.find('BackgroundImageContainer')).toHaveStyleRule(
      'background-image',
      `url(${mockProps.imageUrl})`,
    );
  });
});
