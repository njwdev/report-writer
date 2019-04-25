import React from 'react';
import { Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';
import { AuthUserContext, withAuthentication } from '../../Session';

const SignIn = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />
      ) : (
        <div>
          <SignInForm />
        </div>
      )
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(SignIn);
