import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';
import LandingPage from '../LandingPage';

import * as routes from '../../constants/routes';



const App = () => {
  
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TOKEN, { debug: false}) // set true for GA debugging

  return(
  	<Router>
    	  <Switch>
      	  <Route exact path={routes.LANDING} component={LandingPage} />
      	</Switch>
  	</Router>
	)
}

export default App;