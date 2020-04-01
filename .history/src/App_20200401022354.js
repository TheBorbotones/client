import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './views/login/Login';
import { Dashboard } from './views/dashboard/Dashboard';
import { User } from './user/User';
const App = () => (
  <Router>
    <Switch>
      <Route path="/" component = {Login} />
       <Dashboard>
       <Route component={({ match }) =>
          <div>
                <Route path='/home/usuario' component={User} />
          </div>
        }/>
       </Dashboard>
    </Switch>
</Router>
);
export default App;