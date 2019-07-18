import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default function configureStore() {
  const middlewares = [logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middlewareEnhancer);

  return store;
}
