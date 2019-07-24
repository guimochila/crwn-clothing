import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducerWithPersistor = persistReducer(persistConfig, rootReducer);
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  const middlewares = [thunk];
  const middlewaresForDev = [logger];

  const isDevelopment =
    process.env.NODE_ENV === 'development' ? middlewaresForDev : [];

  const middlewareEnhancer = compose(
    applyMiddleware(...middlewares, ...isDevelopment),
    reduxDevTool,
  );

  const store = createStore(rootReducerWithPersistor, middlewareEnhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}
