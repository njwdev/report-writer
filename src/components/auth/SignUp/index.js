import React from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import AuthPage from '../../layout/Auth/AuthPage';

import { AuthUserContext, withAuthentication } from '../../Session';

const SignUp = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? (
      <Redirect to="/home" />
    ) : (
      <AuthPage title="Sign Up" icon="person_add">
        <SignUpForm />
      </AuthPage>
    ))
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(SignUp);
