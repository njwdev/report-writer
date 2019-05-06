import React from 'react';
import { withAuthorization } from '../../Session';
import CommentsAdmin from './CommentsAdmin';
import LinkButton from '../../ui/Buttons/LinkButton';

const condition = authUser => !!authUser;

const Comments = () => {
  return (
    <div>
      <LinkButton link="admin/comments/add_comment">Add Comment</LinkButton>
      <CommentsAdmin />
    </div>
  );
};

export default withAuthorization(condition)(Comments);
