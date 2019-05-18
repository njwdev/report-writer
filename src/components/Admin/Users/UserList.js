import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import AdminList from '../Lists/AdminList';
import { withFirebase } from '../../../firebase';

const UserList = props => {
  const { users } = props;
  return (
    <List dense>
      {users.map(user => {
        const date = user.created ? user.created.seconds * 1000 : null;
        const displayDate = new Date(date);
        return (
          <AdminList
            key={user.uid}
            icon="person"
            primary={user.username}
            secondary={user.email}
            id={user.uid}
            type="User"
            isAdmin={user.roles.ADMIN}
            created={displayDate.toString()}
          />
        );
      })}
    </List>
  );
};

UserList.propTypes = { users: PropTypes.instanceOf(Array).isRequired };

export default withFirebase(UserList);
