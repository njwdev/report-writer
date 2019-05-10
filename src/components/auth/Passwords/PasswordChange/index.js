import React from 'react';
import { withAuthorization } from '../../../Session';
import ChangeForm from './ChangeForm';
import AuthPage from '../../../layout/Auth/AuthPage';
import BackButton from '../../../ui/Buttons/BackButton';

const condition = authUser => !!authUser;

const PasswordChange = () => {
  return (
    <AuthPage title="Change Password" icon="lock">
      <BackButton link="/account" />
      <ChangeForm />
    </AuthPage>
  );
};

export default withAuthorization(condition)(PasswordChange);
