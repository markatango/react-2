import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

/*BrowserRouter uses history API, i.e. it's unavailable for legacy browsers (IE 9 and lower and contemporaries). 
Client-side React application is able to maintain clean routes like example.com/react/route but needs to be 
backed by web server. Usually this means that web server should be configured for single-page application, 
i.e. same index.html is served for /react/route path or any other route on server side. On client side, 
window.location.pathname is parsed by React router. React router renders a component that it was configured 
to render for /react/route.

Additionally, the setup may involve server-side rendering, index.html may contain rendered 
components or data that are specific to current route.*/
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// Ensures page does not render until the state is updated
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>

      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
