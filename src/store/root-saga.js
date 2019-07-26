import { all, call } from 'redux-saga/effects';

import { shopSaga } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

const sagas = [shopSaga, userSagas, cartSagas];

export default function* rootSaga() {
  yield all(sagas.map(saga => call(saga)));
}
