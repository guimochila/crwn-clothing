import React from 'react';
import { shallow } from 'enzyme';

import { Directory } from './Directory';
import MenuItem from '../MenuItem';

describe('Directory component', () => {
  test('should render Directory component', () => {
    expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
  });

  test('should render MenuItem when sections are provided', () => {
    const mockSections = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const wrapper = shallow(<Directory sections={mockSections} />);
    expect(wrapper.find(MenuItem).length).toBe(3);
  });
});
