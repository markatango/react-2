import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Contacts from './pages/contacts/contacts.component';
//import RouteDemo from './pages/routedemo/routedemo.component';


function App() {
  return (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/shop' component={ ShopPage } />
      <Route path='/signinandsignup' component={ SignInAndSignUp } />
      <Route path='/contacts' component={ Contacts} />
    </Switch>
  </div>
    
  );
}

export default App;
