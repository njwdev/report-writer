import React from 'react';
import AuthPage from '../../utility/AuthPage/AuthPage';
import { AuthUserContext, withAuthorization } from '../Session';
import SignOut from '../auth/SignOut/SignOut';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BackButton from '../ui/Buttons/BackButton';
import LinkButton from '../ui/Buttons/LinkButton';

const data = listItem => {
  return { listItem };
};

const condition = authUser => !!authUser;

const Account = props => {
  return (
    <AuthUserContext.Consumer>
      {authUser => {
        const accountSettings = [
          data(`Email: ${authUser.email}`),
          data(
            <LinkButton link="account/changepassword">
              Change Password
            </LinkButton>,
          ),
          data(<SignOut />),
        ];
        return (
          <AuthPage title="Account Settings" icon="settings">
            <BackButton link="/home" />
            <List>
              {accountSettings.map(item => (
                <ListItem key={Math.random()}>
                  <ListItemText>{item.listItem}</ListItemText>
                </ListItem>
              ))}
            </List>
          </AuthPage>
        );
      }}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(Account);
