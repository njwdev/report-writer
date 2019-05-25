import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Home from '../../components/Home';
import About from '../../components/About/About';
import NotFound from '../../components/ui/NotFound';
import * as ROUTES from '../../constants/routes';
import Landing from '../../components/Landing/Landing';
import Login from '../../components/auth/Login/index';
import SignUp from '../../components/auth/SignUp/index';
import Admin from '../../components/Admin';
import Navigation from '../../components/Navigation/Navigation';
import appStyles from './appStyles';
import { withAuthentication } from '../../components/Session';
import PasswordForget from '../../components/auth/Passwords/PasswordForget';
import Account from '../../components/Account';
import PasswordChange from '../../components/auth/Passwords/PasswordChange';
import Comments from '../../components/Admin/Comments';
import Users from '../../components/Admin/Users';
import AddComment from '../../components/Admin/Comments/AddComment';

const Application = () => (
  <div>
    <Navigation />
    <div>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.ADMIN} component={Admin} />
        <Route exact path={ROUTES.USERS_LIST} component={Users} />
        <Route exact path={ROUTES.COMMENTS_LIST} component={Comments} />
        <Route exact path={ROUTES.ADD_NEW_COMMENT} component={AddComment} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route exact path={ROUTES.PASSWORD_CHANGE} component={PasswordChange} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  </div>
);

const App = withAuthentication(Application);

export default withStyles(appStyles)(App);
