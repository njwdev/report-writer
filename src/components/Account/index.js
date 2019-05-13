import React from 'react';
import AuthPage from '../layout/Auth/AuthPage';
import { AuthUserContext, withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import AccountContent from './AccountContent/AccountContent';

const condition = authUser => !!authUser;

const Account = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => {
        console.log(authUser.roles);
        return (
          <PageContainer>
            <PageHeader link="/" />
            <AuthPage title="Account Settings" icon="settings">
              <AccountContent authUser={authUser} />
            </AuthPage>
          </PageContainer>
        );
      }}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(Account);
