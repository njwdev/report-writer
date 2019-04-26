import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import NotFound from '../../components/NotFound';
import * as ROUTES from '../../constants/routes';
import Landing from '../../components/Landing/Landing';
import SignIn from '../../components/auth/SignIn/index';
import SignUp from '../../components/auth/SignUp/index';
import Admin from '../../components/Admin';
import Navigation from '../../components/Navigation/Navigation';
import { withStyles } from '@material-ui/core/styles';
import appStyles from './appStyles';
import { withAuthentication } from '../../components/Session';
import PasswordForget from '../../components/auth/Passwords/PasswordForget/index';
import Account from '../../components/Account';

const Application = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.ACCOUNT} component={Account} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForget}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

const App = withAuthentication(Application);

export default withStyles(appStyles)(App);
