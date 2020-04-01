import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './views/login/Login';
import { Dashboard } from './views/dashboard/Dashboard';
import { User } from './views/user/User';
import { About } from './views/about/About';
const App = () => (
  <Router>
    <Switch>
      <Route path="/" component = {About} />
      <Route path="/about" component = {About} />
       <Dashboard>
       <Route component={({ match }) =>
          <div>
                <Route path='/usuario' component={User} />
          </div>
        }/>
       </Dashboard>
    </Switch>
</Router>
);
export default App;