import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthUserContext, withAuthentication } from '../../../Session';
import ForgetForm from './ForgetForm';

const PasswordForget = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />
      ) : (
        <div>
          <ForgetForm />
        </div>
      )
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(PasswordForget);
