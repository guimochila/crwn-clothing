import {
  firestore,
  convertCollectionSnapshopToMap,
} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());

    try {
      collectionRef.onSnapshot(async snapshot => {
        const collectionMap = convertCollectionSnapshopToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      });
    } catch (error) {
      dispatch(fetchCollectionFailure(error));
    }
  };
};
