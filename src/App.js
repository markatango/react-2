import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Contacts from './pages/contacts/contacts.component';
//import RouteDemo from './pages/routedemo/routedemo.component';
import { auth, createUsersProfileDocument } from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

 //confirm authentication through 'open subscription' service from firebase
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log("userAuth", userAuth)
      if(userAuth) {
        const userRef = await createUsersProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log("snapShot: ",snapShot);
          console.log("id: ", snapShot.id);
          console.log("exists: ", snapShot.exists);
          console.log("data: ", snapShot.data());
      
          // set state is asynchronous so the console.log has to be the callback fn
          this.setState({
            currentUser: {id: snapShot.id, ...snapShot.data() }
            }, 
            ()=>{ console.log("state: ",this.state);  }
          );
        });
    }
    this.setState({currentUser: userAuth});
  })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signinandsignup' component={ SignInAndSignUp } />
          <Route path='/contacts' component={ Contacts} />
        </Switch>
      </div>
      );
  }
    

  
  
  
  
  
}

export default App;
