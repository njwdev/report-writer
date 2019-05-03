import React from 'react';
import ForgetForm from './ForgetForm';
import AuthPage from '../../../../utility/AuthPage/AuthPage';

const PasswordForget = () => {
  return (
    <AuthPage title="Forgotten your Password?" icon="help">
      <ForgetForm />
    </AuthPage>
  );
};

export default PasswordForget;
