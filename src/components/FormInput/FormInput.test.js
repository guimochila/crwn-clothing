import React from 'react';
import { mount } from 'enzyme';

import FormInput from './FormInput';

describe('FormInput component', () => {
  let wrapper;
  const mockHandleChange = jest.fn();

  beforeEach(() => {
    const mockProps = {
      label: 'email',
      value: 'test@test.com',
      handleChange: mockHandleChange,
    };

    wrapper = mount(<FormInput {...mockProps} />);
  });

  test('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should call handleChange method when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });
  test('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  });
  test('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test@test.com',
      handleChange: mockHandleChange,
    };

    const wrapper = mount(<FormInput {...mockNewProps} />);
    expect(wrapper.exists('FormInputLabel')).toBeFalsy();
  });
});
