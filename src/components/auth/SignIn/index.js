import React from 'react';
import { Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';
import { AuthUserContext, withAuthentication } from '../../Session';
import AuthPage from '../../layout/Auth/AuthPage';

const SignIn = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />
      ) : (
        <AuthPage title="Sign in" icon="lock_open">
          <SignInForm />
        </AuthPage>
      )
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(SignIn);
