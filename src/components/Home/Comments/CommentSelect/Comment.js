import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Internal
import { formatSingleComment } from '../../functions';

const Comment = ({ text, onCommentAdd, name, pronoun, closeModal }) => {
  // This comes from functions and formats the text appropriately based on the user input
  const textToDisplay = formatSingleComment(text, name, pronoun);
  return (
    <Paper
      elevation={12}
      style={{ margin: '3px 5px', padding: '3px', cursor: 'pointer' }}
      onClick={() => {
        // Add the comment and then close the modal immediately
        onCommentAdd(textToDisplay);
        closeModal();
      }}
    >
      <Typography variant='caption' style={{ fontFamily: 'McLaren' }}>
        {textToDisplay}
      </Typography>
    </Paper>
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  onCommentAdd: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronoun: PropTypes.string.isRequired
};
export default Comment;
