import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';
import AuthPage from '../../../layout/Auth/AuthPage';
import PageContainer from '../../../layout/Container/PageContainer';
import PageHeader from '../../../layout/Container/PageHeader';

const condition = authUser => !!authUser;

const AddComment = () => {
  return (
    <PageContainer>
      <PageHeader link="/admin/comments" />
      <AuthPage title="Add comment" icon="comment">
        <AddNewComment />
      </AuthPage>
    </PageContainer>
  );
};

export default withAuthorization(condition)(AddComment);
