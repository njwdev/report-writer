import React from 'react';
import { withAuthorization } from '../../../Session';
import ChangeForm from './ChangeForm';
import AuthPage from '../../../../utility/AuthPage/AuthPage';
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
