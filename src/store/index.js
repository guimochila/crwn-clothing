import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default function configureStore() {
  const middlewares = [logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middlewareEnhancer);

  return store;
}
