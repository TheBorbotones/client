import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './views/login/Login';
import { Dashboard } from './views/dashboard/Dashboard';
import { User } from './views/user/User';
import { About } from './views/about/About';
const App = () => (
  <Router>
    <Switch>
      <Route path="/" component = {Login} />
      <Route  path="/about" component = {About} />
       <Dashboard>
       <Route component={({ match }) =>
          <div>
                <Route path='/usuario' component={User} />
          </div>
        }/>
       </Dashboard>
       <Redirect from='*' to='/usuario' />
    </Switch>
</Router>
);
export default App;