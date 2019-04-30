import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';
import BackButton from '../../../ui/Buttons/BackButton';

const condition = authUser => !!authUser;

const AddComment = () => {
  return (
    <div>
      <BackButton link="/admin/comments" />
      <AddNewComment />
    </div>
  );
};

export default withAuthorization(condition)(AddComment);
