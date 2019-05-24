import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const Comment = props => {
  const { text, onClick } = props;
  return (
    <Paper style={{ margin: '3px 5px', padding: '3px' }}>
      <Typography variant="caption">{text}</Typography>

      <div style={{ textAlign: 'right' }}>
        <IconButton color="secondary" onClick={onClick}>
          <Icon fontSize="small">add_comment</Icon>
        </IconButton>
      </div>
    </Paper>
  );
};

Comment.propTypes = { text: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired };
export default Comment;
