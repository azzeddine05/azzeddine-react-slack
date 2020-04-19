import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import CustomerRegister from './components/CustomerRegister';
import registerServiceWorker from './registerServiceWorker';


import * as serviceWorker from './serviceWorker';

import  { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)

  )
);




const  Root = () => (
  <Router>
      <Switch>
          <Route exact path={"/"} component={App} />
          <Route path={"/register"} component={CustomerRegister} />
      </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
