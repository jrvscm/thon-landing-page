import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import LandingPage from '../LandingPage';

import * as routes from '../../constants/routes';

const App = () => (
  <Router>
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
      </Switch>
  </Router>
)

export default App;