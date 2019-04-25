import React from 'react';
import PasswordChange from '../auth/Passwords/PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import SignOut from '../auth/SignOut/SignOut';

const condition = authUser => !!authUser;

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <p>
          Welcome <strong>{authUser.email}</strong>
        </p>
        <PasswordChange />
        <SignOut />
      </div>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(condition)(Account);
