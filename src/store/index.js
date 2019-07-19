import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducerWithPersistor = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const middlewares = [logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducerWithPersistor, middlewareEnhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}
