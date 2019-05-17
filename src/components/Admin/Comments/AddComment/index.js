import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';
import AuthPage from '../../../layout/Auth/AuthPage';
import PageContainer from '../../../layout/Container/PageContainer';
import PageHeader from '../../../layout/Container/PageHeader';
import Guide from './Guide';
import * as ROLES from '../../../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

const AddComment = () => (
  <PageContainer>
    <PageHeader link="/admin/comments" />
    <AuthPage title="Add comment" icon="comment">
      <AddNewComment />
    </AuthPage>
    <Guide />
  </PageContainer>
);

export default withAuthorization(condition)(AddComment);
