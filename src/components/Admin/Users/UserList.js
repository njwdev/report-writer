import React from 'react';
import List from '@material-ui/core/List';
import AdminList from '../../layout/Lists/AdminList';

const UserList = props => {
  const { users } = props;
  return (
    <List dense>
      {users.map(user => (
        <AdminList
          key={user.uid}
          icon="person"
          primary={user.email}
          secondary={user.username}
        />
      ))}
    </List>
  );
};

export default UserList;
