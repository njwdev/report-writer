import React from 'react';
import { withAuthorization } from '../../Session';
import UserAdmin from './UserAdmin';
import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';
import * as ROLES from '../../../constants/roles';
import { usersDesc } from '../../ui/PageDescriptions';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

const Users = () => (
  <PageContainer>
    <PageHeader title="Users" link="/admin" pageDescription={usersDesc} />
    <UserAdmin />
  </PageContainer>
);

export default withAuthorization(condition)(Users);
