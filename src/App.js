import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SigninAndSignupPage from './pages/SigninAndSignupPage';
import CheckoutPage from './pages/Checkout';
import { default as Header } from './components/Header';
import NotFound from './pages/NotFound';
import { checkUserSession } from './store/user/user.actions';
import { selectCurrentUser } from './store/user/user.selectors';

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

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
            return currentUser ? <Redirect to="/" /> : <SigninAndSignupPage />;
          }}
        />
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
