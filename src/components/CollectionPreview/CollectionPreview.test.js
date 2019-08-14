import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './CollectionPreview';
import CollectionItem from '../CollectionItem';

describe('CollectionPreview component', () => {
  let wrapper;
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const mockProps = {
    match: {
      url: 'https://crwn-clothing.com/items',
    },
    title: 'Hats',
    items,
  };

  beforeEach(() => {
    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  test('should render CollectionPreview', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should PreviewContainer can not have more than 4 CollectionItem rendered', () => {
    expect(wrapper.find(CollectionItem).length).toBe(4);
  });

  test('should render the correct URL in TitleLink', () => {
    expect(wrapper.find('TitleLink').prop('to')).toBe(
      `${mockProps.match.url}/${mockProps.title.toLocaleLowerCase()}`,
    );
  });
});
