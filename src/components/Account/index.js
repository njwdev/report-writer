import React from 'react';
// Internal
import { AuthUserContext, withAuthorization } from '../Session';
import AuthPage from '../layout/Auth/AuthPage';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import AccountContent from './AccountContent/AccountContent';

const condition = authUser => !!authUser;

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <PageContainer>
        <PageHeader link='/' />
        <AuthPage title='Account Settings' icon='settings'>
          <AccountContent authUser={authUser} />
        </AuthPage>
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(condition)(Account);
