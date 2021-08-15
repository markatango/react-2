import React, { useEffect } from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Contacts from './pages/contacts/contacts.component';
// import RouteDemo from './pages/routedemo/routedemocomponent';

import { connect } from 'react-redux';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

// one time only: write SHOP_DATA  to firestore
// import SHOP_DATA  from './redux/shop/shop.data';
// per course:
// import { SelectCollectionForPreview } from './redux/shop/shop.selectors';



const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  },[checkUserSession])


  /* componentWillUnmount(){
    unsubscribeFromAuth();
  } */
  
  // render param executes javascript

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route exact path='/signinandsignup' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        <Route path='/contacts' component={ Contacts} />
        <Route exact path = '/checkout' component={ CheckoutPage } />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: SelectCollectionForPreview
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
