import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

import Users from './Users';
import Comments from './Comments';

const condition = authUser => !!authUser;

const Admin = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Admin</h1>
          <Users />
          <Comments />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(Admin);
