import React from 'react';
import ChangeForm from './ChangeForm';
import AuthPage from '../../../../utility/AuthPage/AuthPage';

const PasswordChange = () => {
  return (
    <AuthPage title="Change Password" icon="lock">
      <ChangeForm />
    </AuthPage>
  );
};

export default PasswordChange;
