import React from 'react';
import PropTypes from 'prop-types';
// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Internal
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import { LinkButton } from '../../ui/Buttons';

const data = listItem => ({ listItem });

const AccountContent = ({ authUser }) => {
  const accountSettings = [
    data(`Email: ${authUser.email}`),
    data(
      <LinkButton link='account/changepassword'>Change Password</LinkButton>
    ),
    data(<DeleteAccount />)
  ];

  return (
    <List>
      {accountSettings.map(item => (
        <ListItem key={Math.random()}>
          <ListItemText>{item.listItem}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

AccountContent.propTypes = { authUser: PropTypes.shape({}).isRequired };

export default AccountContent;
