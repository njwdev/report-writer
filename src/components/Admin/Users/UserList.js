import React from 'react';
import List from '@material-ui/core/List';
import AdminList from '../../layout/Lists/AdminList';
import { withFirebase } from '../../../firebase';

const UserList = props => {
  const { users } = props;
  return (
    <List dense>
      {users.map(user => (
        <AdminList
          key={user.uid}
          icon="person"
          primary={user.username}
          secondary={user.email}
          id={user.uid}
          type="User"

          // onDelete={() =>
          //   firebase
          //     .user(user.uid)
          //     .delete()
          //     .then(() => history.push(ROUTES.USERS_LIST))
          // }
        />
      ))}
    </List>
  );
};

export default withFirebase(UserList);
