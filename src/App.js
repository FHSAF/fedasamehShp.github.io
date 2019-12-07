import React from 'react';
import { Switch, Route } from 'react-router-dom'


import './App.css'
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component.jsx';
import Header from './Components/header/header.component.jsx'
import SignInSignUp from './Components/sign-in-sign-up/sign-in-sign-up.component.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <SignInSignUp path='/sign-in' />
      </Switch>
    </div>
  );
}

export default App;
