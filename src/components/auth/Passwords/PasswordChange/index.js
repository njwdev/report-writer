import React from 'react';
import { withAuthorization } from '../../../Session';
import ChangeForm from './ChangeForm';
import AuthPage from '../../../../utility/AuthPage/AuthPage';

const condition = authUser => !!authUser;

const PasswordChange = () => {
  return (
    <AuthPage title="Change Password" icon="lock">
      <ChangeForm />
    </AuthPage>
  );
};


export default withAuthorization(condition)(PasswordChange);
