import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ShopPage } from './ShopPage';

export const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null,
    },
  };
};

describe('ShopPage', () => {
  let wrapper;
  let store;
  let mockProps;

  beforeEach(() => {
    const mockReducer = (
      state = {
        isFetching: true,
      },
      action,
    ) => state;

    const mockState = {
      shop: {
        isFetching: true,
      },
    };

    store = createMockStore({
      state: mockState,
      reducers: { shop: mockReducer },
    });

    const mockMatch = {
      path: '',
    };

    mockProps = {
      match: mockMatch,
      fetchCollectionStart: jest.fn(),
    };

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ShopPage {...mockProps} />
        </Provider>
      </BrowserRouter>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render ShopPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ShopPage component', () => {
    expect(mockProps.fetchCollectionStart).toHaveBeenCalledTimes(1);
  });
});
