import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import LinkButton from '../ui/Buttons/LinkButton';
import PageHeader from '../layout/Container/PageHeader';

const condition = authUser => !!authUser;

const Admin = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <PageContainer>
          <PageHeader title="Admin" link="/home" />
          <LinkButton link="admin/users">Users</LinkButton>
          <LinkButton link="admin/comments">Comments</LinkButton>
        </PageContainer>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(Admin);
