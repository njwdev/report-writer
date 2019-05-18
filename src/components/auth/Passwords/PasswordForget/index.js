import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthUserContext, withAuthentication } from '../../../Session';
import ForgetForm from './ForgetForm';
import AuthPage from '../../../layout/Auth/AuthPage';
import PageContainer from '../../../layout/Container/PageContainer';
import PageHeader from '../../../layout/Container/PageHeader';

const PasswordForget = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? (
      <Redirect to="/home" />
    ) : (
      <PageContainer>
        <PageHeader link="/admin/comments" />
        <AuthPage title="Forgotten your Password?" icon="help">
          <ForgetForm />
        </AuthPage>
      </PageContainer>
    ))
    }
  </AuthUserContext.Consumer>
);

export default withAuthentication(PasswordForget);
