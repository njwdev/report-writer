import React from 'react';
import { withAuthorization } from '../../Session';
import CommentsAdmin from './CommentsAdmin';
import LinkButton from '../../ui/Buttons/LinkButton';

const condition = authUser => !!authUser;

const Comments = () => {
  return (
    <div>
      <LinkButton text="Add Comment" link="admin/comments/add_comment" />
      <CommentsAdmin />
    </div>
  );
};

export default withAuthorization(condition)(Comments);
