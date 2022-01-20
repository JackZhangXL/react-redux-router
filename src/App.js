import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Router from './react-router/BrowserRouter';
import Route from './react-router/Route';
import Switch from './react-router/Switch';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

export default () => {
  return (  
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home}/>
      </Switch>
      {/* <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Home}/> */}
    </Router>
  );
}
