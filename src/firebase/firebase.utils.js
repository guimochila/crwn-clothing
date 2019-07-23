import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import md5 from 'blueimp-md5';

const config = {
  apiKey: 'AIzaSyBuSuLqKF7pyBpRHjf0r7Mt_IJQ8Wa2OiM',
  authDomain: 'crwndb-cc158.firebaseapp.com',
  databaseURL: 'https://crwndb-cc158.firebaseio.com',
  projectId: 'crwndb-cc158',
  storageBucket: '',
  messagingSenderId: '582281122233',
  appId: '1:582281122233:web:393e2e922921fb40',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    let { photoURL } = userAuth;
    const createdAt = new Date();

    if (!photoURL) {
      photoURL = `https://www.gravatar.com/avatar/${md5(email)}?d=mp&s=64`;
    } else {
      photoURL = `${photoURL}?sz=64`;
    }

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshopToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
