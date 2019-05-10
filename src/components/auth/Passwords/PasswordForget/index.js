import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthUserContext, withAuthentication } from '../../../Session';
import ForgetForm from './ForgetForm';
import AuthPage from '../../../layout/Auth/AuthPage';

const PasswordForget = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />
      ) : (
        <AuthPage title="Forgotten your Password?" icon="help">
          <ForgetForm />
        </AuthPage>
      )
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(PasswordForget);
