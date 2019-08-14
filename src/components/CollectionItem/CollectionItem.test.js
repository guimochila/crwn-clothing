import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './CollectionItem';

describe('CollectionItem component', () => {
  let wrapper;
  const mockProps = {
    item: {
      name: 'Hat',
      price: 20,
      imageUrl: 'https://imgsrc.com/hat',
    },
    addItem: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  test('should render CollectionItem', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call addItem with item when AddButton is clicked', () => {
    wrapper.find('AddButton').simulate('click');
    expect(mockProps.addItem).toHaveBeenCalledWith(mockProps.item);
  });

  test('should render imageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(
      mockProps.item.imageUrl,
    );
  });

  test('should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockProps.item.name);
  });

  test('should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text());
    expect(price).toBe(mockProps.item.price);
  });
});
