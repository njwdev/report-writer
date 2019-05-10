import React from 'react';
import AuthPage from '../layout/Auth/AuthPage';
import { AuthUserContext, withAuthorization } from '../Session';
import SignOut from '../auth/SignOut/SignOut';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinkButton from '../ui/Buttons/LinkButton';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';

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
          <PageContainer>
            <PageHeader link="/" />
            <AuthPage title="Account Settings" icon="settings">
              <List>
                {accountSettings.map(item => (
                  <ListItem key={Math.random()}>
                    <ListItemText>{item.listItem}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </AuthPage>
          </PageContainer>
        );
      }}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(Account);
