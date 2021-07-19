import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import Contacts from './pages/contacts/contacts.component';
//import RouteDemo from './pages/routedemo/routedemocomponent';
import { auth, createUsersProfileDocument } from './firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component'

class App extends React.Component {
  
  unsubscribeFromAuth = null

 //confirm authentication through 'open subscription' service from firebase
 // user action 'setCurrentUser' is dispatched from user.actions to props for this component
 // by the mapDispatchToProps function, below.
  componentDidMount() {
    
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log("userAuth", userAuth)
      if(userAuth) {
        const userRef = await createUsersProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {id: snapShot.id, ...snapShot.data() }
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 /* <Route exact path='/shop/:collectionId' component={ CollectionPage } />*/
  // render param executes javascript
  render() {
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signinandsignup'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
