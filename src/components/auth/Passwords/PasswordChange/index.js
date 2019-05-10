import React from 'react';
import { withAuthorization } from '../../../Session';
import PageContainer from '../../../layout/Container/PageContainer';
import ChangeForm from './ChangeForm';
import AuthPage from '../../../layout/Auth/AuthPage';
import PageHeader from '../../../layout/Container/PageHeader';

const condition = authUser => !!authUser;

const PasswordChange = () => {
  return (
    <PageContainer>
      <PageHeader link="/account" />
      <AuthPage title="Change Password" icon="lock">
        <ChangeForm />
      </AuthPage>
    </PageContainer>
  );
};

export default withAuthorization(condition)(PasswordChange);
