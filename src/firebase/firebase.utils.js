import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
