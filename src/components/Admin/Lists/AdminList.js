import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import AdminModal from './AdminModal';

const AdminList = props => {
  const { icon, isAdmin, primary, secondary } = props;

  return (
    <div>
      <Paper>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: isAdmin ? '#28B463' : null }}>
              <Icon>{icon}</Icon>
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={primary} secondary={secondary} />

          <ListItemSecondaryAction>
            <AdminModal {...props} />
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
      <Divider />
    </div>
  );
};

AdminList.propTypes = {
  icon: PropTypes.string.isRequired,
  isAdmin: PropTypes.string,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

AdminList.defaultProps = { isAdmin: '' };
export default AdminList;
