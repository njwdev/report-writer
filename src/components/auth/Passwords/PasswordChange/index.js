import React from 'react';
import { withAuthorization } from '../../../Session';
import ChangeForm from './ChangeForm';

const condition = authUser => !!authUser;

const PasswordChange = () => (
  <div>
    <ChangeForm />
  </div>
);

export default withAuthorization(condition)(PasswordChange);
