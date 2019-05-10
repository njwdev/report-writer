import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';
import BackButton from '../../../ui/Buttons/BackButton';
import AuthPage from '../../../layout/Auth/AuthPage';

const condition = authUser => !!authUser;

const AddComment = () => {
  return (
    <AuthPage title="Add comment" icon="comment">
      <BackButton link="/admin/comments" />
      <AddNewComment />
    </AuthPage>
  );
};

export default withAuthorization(condition)(AddComment);
