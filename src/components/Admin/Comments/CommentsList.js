import React from 'react';
import List from '@material-ui/core/List';
import AdminList from '../../layout/Lists/AdminList';

const CommentsList = props => {
  const { comments } = props;
  return (
    <List dense>
      {comments.map(comment => (
        <AdminList
          key={comment.uid}
          icon="label_important"
          primary={comment.type}
          secondary={comment.comment}
        />
      ))}
    </List>
  );
};

export default CommentsList;
