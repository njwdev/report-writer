import React from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';

import { AuthUserContext, withAuthentication } from '../../Session';

const SignUp = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />
      ) : (
        <div>
          <SignUpForm />
        </div>
      )
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(SignUp);
