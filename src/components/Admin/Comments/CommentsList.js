import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

const CommentsList = props => {
  const { comments } = props;
  return (
    <div>
      <List dense>
        {comments.map(comment => (
          <React.Fragment key={comment.uid}>
            <Paper>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Icon>label_important</Icon>
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={comment.type}
                  secondary={comment.comment}
                />

                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <Icon>edit</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default CommentsList;
