import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound';
import * as ROUTES from '../../constants/routes';
import Landing from '../Landing/Landing';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Admin from '../Admin/Admin';
import Navigation from '../Navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
