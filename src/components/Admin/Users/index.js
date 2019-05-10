import React from 'react';
import { withAuthorization } from '../../Session';
import UserAdmin from './UserAdmin';
import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';

const condition = authUser => !!authUser;

const Users = () => {
  return (
    <PageContainer>
      <PageHeader title="Users" link="/admin" />
      <UserAdmin />
    </PageContainer>
  );
};

export default withAuthorization(condition)(Users);
