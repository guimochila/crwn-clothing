import { combineReducers, createStore, applyMiddleware } from 'redux';
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

export default function configureStore() {
  const middlewares = [];
  const middlewaresForDev = [logger];

  const isDevelopment =
    process.env.NODE_ENV === 'development' ? middlewaresForDev : [];

  const middlewareEnhancer = applyMiddleware(...middlewares, ...isDevelopment);

  const store = createStore(rootReducerWithPersistor, middlewareEnhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}
