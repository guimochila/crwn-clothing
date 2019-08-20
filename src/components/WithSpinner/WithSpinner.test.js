import React from 'react';
import { shallow } from 'enzyme';

import WithSpinner from './WithSpinner';
import Spinner from '../Spinner';

describe('WithSpinner HOC', () => {
  const TestComponent = () => <div className="test" />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('if loading is true', () => {
    test('it should render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(Spinner)).toBe(true);
    });

    test('should not render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('if loading is false', () => {
    test('it should not render Spinner', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(Spinner)).toBe(false);
    });

    test('should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(TestComponent)).toBe(true);
    });
  });
});
