import React from 'react';
import { withAuthorization } from '../../Session';
import UserAdmin from './UserAdmin';
import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';
import * as ROLES from '../../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];
const desc = 'A list of all the  currently registered users and admins. Select a user to view details and edit admin status.';
const Users = () => (
  <PageContainer>
    <PageHeader title="Users" link="/admin" pageDescription={desc} />
    <UserAdmin />
  </PageContainer>
);

export default withAuthorization(condition)(Users);
