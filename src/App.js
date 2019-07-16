import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SigninAndSignupPage from './pages/SigninAndSignupPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
