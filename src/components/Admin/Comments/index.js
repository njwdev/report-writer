import React from 'react';
import { withAuthorization } from '../../Session';
import CommentsAdmin from './CommentsAdmin';

const condition = authUser => !!authUser;

const Comments = () => {
  return (
    <div>
      <CommentsAdmin />
    </div>
  );
};

export default withAuthorization(condition)(Comments);
