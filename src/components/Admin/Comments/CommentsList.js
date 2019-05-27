import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import AdminList from '../Lists/AdminList';

const CommentsList = props => {
  const { comments, onDelete } = props;
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <List dense>
        {comments.map(comment => {
          const date = comment.created.seconds * 1000;
          const displayDate = new Date(date);
          return (
            <AdminList
              key={comment.uid}
              icon="label_important"
              primary={comment.type}
              secondary={comment.comment}
              id={comment.uid}
              type="Comment"
              onDelete={onDelete}
              author={comment.author}
              created={displayDate.toString()}
            />
          );
        })}
      </List>
    </Grid>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CommentsList;
