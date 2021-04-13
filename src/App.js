import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';


import './App.css';

const HatsPage = () => (
  <div>
    <h1>New Hats page</h1>
  </div>
)

/* const Directory = () => (
  <div>
    <h1>Directory</h1>
  </div>
) */

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
     
    </div>
  );
}

export default App;
