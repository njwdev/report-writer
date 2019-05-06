import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import LinkButton from '../ui/Buttons/LinkButton';
import BackButton from '../ui/Buttons/BackButton';

const condition = authUser => !!authUser;

const Admin = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Admin</h1>
          <BackButton link="/home" />
          <LinkButton link="admin/users">Users</LinkButton>
          <LinkButton link="admin/comments">Comments</LinkButton>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(Admin);
