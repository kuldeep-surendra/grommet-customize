import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import NavSidebar from './NavSidebar';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Tasks from '../screens/Tasks';
import NotFound from '../screens/NotFound';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Router>
          <Split
            priority='right'
            flex='right'
          >
            <NavSidebar />
            <Switch>
              <Route exact={true} path='/' component={Dashboard} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/login' component={Login} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/*' component={NotFound} />
            </Switch>
          </Split>
        </Router>
      </App>
    );
  }
}


export default Main;
