import React from 'react';
import { withAuthorization } from '../../Session';
import UserAdmin from './UserAdmin';

const condition = authUser => !!authUser;

const Users = () => {
  return (
    <div>
      <UserAdmin />
    </div>
  );
};

export default withAuthorization(condition)(Users);
