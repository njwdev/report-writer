import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import LinkButton from '../ui/Buttons/LinkButton';
import PageHeader from '../layout/Container/PageHeader';
import * as ROLES from '../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

const Admin = () => (
  <AuthUserContext.Consumer>
    (
    <PageContainer>
      <PageHeader title="Admin" link="/home" />
      <LinkButton link="admin/users">Users</LinkButton>
      <LinkButton link="admin/comments">Comments</LinkButton>
    </PageContainer>
    )
  </AuthUserContext.Consumer>
);

export default withAuthorization(condition)(Admin);
