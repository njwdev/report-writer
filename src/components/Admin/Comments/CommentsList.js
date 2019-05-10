import React from 'react';
import List from '@material-ui/core/List';
import AdminList from '../../layout/Lists/AdminList';

const CommentsList = props => {
  const { comments, onDelete } = props;
  return (
    <List dense>
      {comments.map(comment => (
        <AdminList
          key={comment.uid}
          icon="label_important"
          primary={comment.type}
          secondary={comment.comment}
          id={comment.uid}
          type="Comment"
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default CommentsList;
