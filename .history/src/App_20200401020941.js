import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './views/login/Login';
import { Dashboard } from './views/dashboard/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route exact  path="/login" component = {Login} />
    </Switch>
</Router>
);
export default App;