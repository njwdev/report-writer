import React from 'react';
// Internal
import { withAuthorization } from '../../Session';

import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';
import * as ROLES from '../../../constants/roles';
import Instructions from '../../layout/Container/Instructions';
import UserAdmin from './UserAdmin';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

// Instruction Data
const instructionData = [
  { icon: 'person', text: 'View all users and admins' },
  { icon: 'email', text: 'View user details' },
  { icon: 'verified_user', text: 'Give a user admin permissions' }
];

const Users = () => (
  <PageContainer>
    <PageHeader title='Users' link='/admin' />
    <Instructions data={instructionData} />
    <UserAdmin />
  </PageContainer>
);

export default withAuthorization(condition)(Users);
