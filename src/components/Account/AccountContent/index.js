import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteAccount from '../DeleteAccount';
import { LinkButton } from '../../ui/Buttons';

const data = listItem => ({ listItem });

const AccountContent = props => {
  const { authUser } = props;
  const accountSettings = [
    data(`Email: ${authUser.email}`),
    data(<LinkButton link="account/changepassword">Change Password</LinkButton>),
    data(<DeleteAccount />),
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
