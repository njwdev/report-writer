import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';
import PageContainer from '../../../layout/Container/PageContainer';
import PageHeader from '../../../layout/Container/PageHeader';
import Guide from './Guide';
import * as ROLES from '../../../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

const AddComment = () => (
  <PageContainer>
    <PageHeader link="/admin/comments" />
    <AddNewComment />
    <Guide />
  </PageContainer>
);

export default withAuthorization(condition)(AddComment);
