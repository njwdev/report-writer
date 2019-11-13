import React from 'react';
// Internal
import { withAuthorization } from '../../../Session';
import PageContainer from '../../../layout/Container/PageContainer';
import PageHeader from '../../../layout/Container/PageHeader';
import * as ROLES from '../../../../constants/roles';
import Guide from './Guide/Guide';
import AddNewComment from './AddNewComment';
import Instructions from '../../../layout/Container/Instructions';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

// Instruction data

const instructionData = [
  {
    icon: 'menu_book',
    text: 'Use the guide'
  },
  {
    icon: 'spellcheck',
    text: 'Codes are case sensitive'
  },
  {
    icon: 'looks_one',
    text: 'Write only one sentence!'
  }
];
const AddComment = () => (
  <PageContainer>
    <PageHeader title='Add New Comment' link='/admin/comments' />
    <Instructions data={instructionData} />
    <AddNewComment />
    <Guide />
  </PageContainer>
);

export default withAuthorization(condition)(AddComment);
