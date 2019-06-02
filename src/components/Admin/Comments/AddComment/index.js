import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';
import PageContainer from '../../../layout/Container/PageContainer';
import PageHeader from '../../../layout/Container/PageHeader';
import Guide from './Guide';
import * as ROLES from '../../../../constants/roles';
import { addCommentDesc } from '../../../ui/PageDescriptions';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

const AddComment = () => (
  <PageContainer>
    <PageHeader title="Add New Comment" link="/admin/comments" pageDescription={addCommentDesc} />
    <AddNewComment />
    <Guide />
  </PageContainer>
);

export default withAuthorization(condition)(AddComment);
