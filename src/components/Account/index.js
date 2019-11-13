import React from 'react';
// Internal
import { AuthUserContext, withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import AccountContent from './AccountContent/AccountContent';

const condition = authUser => !!authUser;

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <PageContainer>
        <PageHeader link='/' title='Account Settings' />
        <AccountContent authUser={authUser} />
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(condition)(Account);
