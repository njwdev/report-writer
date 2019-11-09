import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import UserList from '../UserList';

const data = (type, content) => ({ type, content });

const UsersPanels = ({ users }) => {
  const adminUsers = users.filter(user => user.roles.ADMIN);
  const normalUsers = users.filter(user => !user.roles.ADMIN);

  const usersPanels = [data('Users', normalUsers), data('Admin', adminUsers)];
  return (
    <Fragment>
      {usersPanels.map(user => (
        <ExpansionPanel key={user.type} style={{ backgroundColor: 'primary' }}>
          <ExpansionPanelSummary
            expandIcon={<i className='material-icons'>expand_more</i>}
          >
            <Typography>{user.type}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UserList users={user.content} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Fragment>
  );
};

UsersPanels.propTypes = { users: PropTypes.instanceOf(Array).isRequired };

export default UsersPanels;
