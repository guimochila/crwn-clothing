import React from 'react';
import { shallow } from 'enzyme';

import { CollectionsOverview } from './CollectionsOverview';
import CollectionPreview from '../CollectionPreview';

describe('CollectionsOverview component', () => {
  test('should render CollectionsOverview', () => {
    expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
  });

  test('should render CollectionPreview item', () => {
    const mockCollections = [{ id: 1 }, { id: 2 }];
    const wrapper = shallow(
      <CollectionsOverview collections={mockCollections} />,
    );
    expect(wrapper.find(CollectionPreview).length).toBe(2);
  });
});
