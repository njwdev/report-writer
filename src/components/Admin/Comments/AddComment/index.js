import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';
import PageContainer from '../../../layout/Container/PageContainer';
import PageHeader from '../../../layout/Container/PageHeader';
import Guide from './Guide';
import * as ROLES from '../../../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];
const desc = 'Use the guide below to add new comments to the database. The codes must be exact. Limit each comment to one sentence.';
const AddComment = () => (
  <PageContainer>
    <PageHeader title="Add New Comment" link="/admin/comments" pageDescription={desc} />
    <AddNewComment />
    <Guide />
  </PageContainer>
);

export default withAuthorization(condition)(AddComment);
