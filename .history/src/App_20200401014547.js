import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './views/dashboard/Dashboard';
import Login from './views/login/Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
</Router>
);
export default App;