import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import LinkButton from '../ui/Buttons/LinkButton';

const condition = authUser => !!authUser;

const Admin = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Admin</h1>
          <LinkButton text="Users" link="admin/users" />
          <LinkButton text="Comments" link="admin/comments" />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(Admin);
