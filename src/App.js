import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { checkUserSession } from './store/user/user.actions';
import { selectCurrentUser } from './store/user/user.selectors';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/Checkout'));
const SigninAndSignupPage = lazy(() => import('./pages/SigninAndSignupPage'));

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Error>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() => {
                return currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SigninAndSignupPage />
                );
              }}
            />
          </Suspense>
        </Error>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispathToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(App);
