import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';

import { GlobalStyle } from './global.styles';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SigninAndSignupPage from './pages/SigninAndSignupPage';
import { default as CheckoutPage } from './pages/Checkout';
import { default as Header } from './components/Header';
import NotFound from './pages/NotFound';
import { GET_CURRENT_USER, SET_CURRENT_USER } from './graphql/queries';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => {
            return !currentUser ? <Redirect to="/" /> : <SigninAndSignupPage />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default compose(
  graphql(GET_CURRENT_USER, { name: 'currentUser' }),
  graphql(SET_CURRENT_USER, { name: 'setCurrentUser' }),
)(App);
