import React from 'react';
// Internal
import { withAuthorization } from '../../Session';
import CommentsAdmin from './CommentsAdmin';
import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';
import Instructions from '../../layout/Container/Instructions';
import * as ROLES from '../../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

// Instruction Data
const instructionData = [
  { icon: 'list', text: 'View all comments' },
  { icon: 'add_comment', text: 'Add new comments' },
  { icon: 'rate_review', text: 'Edit or delete existing comments' }
];
const Comments = () => (
  <PageContainer>
    <PageHeader title='Comments' link='/admin' />
    <Instructions data={instructionData} />
    <CommentsAdmin />
  </PageContainer>
);

export default withAuthorization(condition)(Comments);
