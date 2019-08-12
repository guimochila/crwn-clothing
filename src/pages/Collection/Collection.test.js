import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './Collection';
import CollectionItem from '../../components/CollectionItem';

describe('Collection Page', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Testing',
    };
    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  test('should render Collection Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
