import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import configureStore from './store';

const { store, persistor } = configureStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
