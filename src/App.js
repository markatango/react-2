import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
//import ShopPage from './pages/shop/shop.component';
//import RouteDemo from './pages/routedemo/routedemo.component';

const ShopHats = (props) => {
  console.log(props)
  return(
  <div>
    <h1>Shop for hats</h1>
  </div>
)}


function App() {
  return (
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/shop/hats' component={ ShopHats } />
    </Switch>
  );
}

export default App;
