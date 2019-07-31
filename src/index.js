import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import configureStore from './store';
import configureApollo from './configureApollo';

const { store, persistor } = configureStore();

const client = configureApollo();

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
