import React from 'react'
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



class App extends React.Component {
  
  unsubscribeFromAuth = null

 //confirm authentication through 'open subscription' service from firebase
 // user action 'setCurrentUser' is dispatched from user.actions to props for this component
 // by the mapDispatchToProps function, below.
  componentDidMount() {
    

    const { checkUserSession } = this.props;
    checkUserSession()

    //attach a 'next function to the listener (onAuthStat...) that subscribes to the observable sequence of auth events
    // assign the function returned to unsubscribe... so the listenter can unsubxribe when the component unmounts

    // this code uses proprietary firebase functions; implement as promise pattern in user.sagas
    /* this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log("userAuth", userAuth)
      if(userAuth) {
        const userRef = await createUsersProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {id: snapShot.id, ...snapShot.data() }
          });
        });
      }
      setCurrentUser(userAuth); */

      // ONe time function to write to firebase
      // storeShopDataIntoFirestore("collections", collectionsArray);
      // storeShopDataIntoFirestore("collections", collectionsArray.map(({title, items}) => {title,items}));
   // });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  // render param executes javascript
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/signinandsignup' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
          <Route path='/contacts' component={ Contacts} />
          <Route exact path = '/checkout' component={ CheckoutPage } />
        </Switch>
      </div>
    );
  }
}

//<Route exact path='/signinandsignup' component={ SignInAndSignUp }/>

// render renders from JavaScript; component renders from component

/* const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
}) */

// One time function:
// selectCollectionsForPreview is how we get the collections data
// pass it to props then use the util function to write to firebase
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: SelectCollectionForPreview
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
