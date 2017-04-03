import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Redirect, browserHistory } from 'react-router';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="login" component={Login} />
    <Route path="dashboard" component={Dashboard} />
    <Redirect from="*" to="login" />
  </Router>,
  document.getElementById('root')
);
