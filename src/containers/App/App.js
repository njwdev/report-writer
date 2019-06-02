import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Styles
import { withStyles } from '@material-ui/core/styles';
import appStyles from './appStyles';
// Components to render
import Navigation from '../../components/Navigation/Navigation';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About';
import Home from '../../components/Home';
import Account from '../../components/Account';
import PasswordChange from '../../components/auth/Passwords/PasswordChange';
import Login from '../../components/auth/Login/index';
import SignUp from '../../components/auth/SignUp/index';
import PasswordForget from '../../components/auth/Passwords/PasswordForget';
import Admin from '../../components/Admin';
import Comments from '../../components/Admin/Comments';
import Users from '../../components/Admin/Users';
import AddComment from '../../components/Admin/Comments/AddComment';
import NotFound from '../../components/ui/NotFound';
// Other
import { withAuthentication } from '../../components/Session';
import * as ROUTES from '../../constants/routes';

const Application = () => (
  <div>
    <Navigation />
    <div>
      <Switch>
        {/* Not auth specific */}
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        {/* Auth users */}
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.PASSWORD_CHANGE} component={PasswordChange} />
        {/* Non-auth users */}
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        {/* Admin users */}
        <Route exact path={ROUTES.ADMIN} component={Admin} />
        <Route exact path={ROUTES.USERS_LIST} component={Users} />
        <Route exact path={ROUTES.COMMENTS_LIST} component={Comments} />
        <Route exact path={ROUTES.ADD_NEW_COMMENT} component={AddComment} />
        {/* Not found */}
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  </div>
);

const App = withAuthentication(Application);

export default withStyles(appStyles)(App);
