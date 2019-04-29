import React from 'react';
import { withAuthorization } from '../../../Session';
import AddNewComment from './AddNewComment';

const condition = authUser => !!authUser;

const AddComment = () => {
  return (
    <div>
      <AddNewComment />
    </div>
  );
};

export default withAuthorization(condition)(AddComment);
