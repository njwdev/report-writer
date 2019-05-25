import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { AuthUserContext, withAuthentication } from '../../Session';
import AuthPage from '../../layout/Auth/AuthPage';

const Login = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? (
      <Redirect to="/home" />
    ) : (
      <AuthPage title="Login" icon="lock_open">
        <LoginForm />
      </AuthPage>
    ))
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(Login);
