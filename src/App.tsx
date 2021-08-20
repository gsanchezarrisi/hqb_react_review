import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';
import ContentPage01 from './pages/contentPage01/ContentPage01';
import ContentPage02 from './pages/contentPage02/ContentPage02';


const AppRoutes = (): JSX.Element => (
  <Router>
      <Switch>
          <Route exact path={'/content01'} component ={ContentPage01}/>
          <Route exact path={'/content02'} component ={ContentPage02}/>
          <Route path={'/'} component ={HomePage}/>
      </Switch>
  </Router>
);

const App = (): JSX.Element => {
    return (
      <div>
          <AppRoutes/>
      </div>
    );
}

export default App;
