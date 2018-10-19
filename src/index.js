import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import App from './App';
import PlaceHolder from './PlaceHolder'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/all" component={PlaceHolder} />
      <Route exact path="/about" component={PlaceHolder} />
      <Route exact path="/account" component={PlaceHolder} />
      <Route exact path="/bag" component={PlaceHolder} />
    </React.Fragment>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
