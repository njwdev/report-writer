import React from 'react';
import PropTypes from 'prop-types';
// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Internal
import DeleteAccount from './DeleteAccount';
import { LinkButton } from '../../ui/Buttons';

const AccountContent = ({ authUser }) => {
  return (
    <List>
      <ListItem>Email: {authUser.email}</ListItem>
      <ListItem button>
        <LinkButton link='account/changepassword'>Change Password</LinkButton>
      </ListItem>
      <ListItem button>
        <ListItemText>
          <DeleteAccount />
        </ListItemText>
      </ListItem>
    </List>
  );
};

AccountContent.propTypes = { authUser: PropTypes.shape({}).isRequired };

export default AccountContent;
