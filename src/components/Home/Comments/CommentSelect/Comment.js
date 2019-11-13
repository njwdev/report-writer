import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Comment = ({ text, onCommentAdd, name, pronoun, closeModal }) => {
  const formattedText = text
    .replace(/1NNN/g, name)
    .replace(/1SSS/g, pronoun === 'male' ? 'he' : 'she')
    .replace(/1YYY/g, pronoun === 'male' ? 'him' : 'her')
    .replace(/1AAA/g, pronoun === 'male' ? 'his' : 'her')
    .replace(/1PPP/g, pronoun === 'male' ? 'his' : 'hers')
    .replace(/1RRR/g, pronoun === 'male' ? 'himself' : 'herself');

  // Make each sentence start with a capital letter and add a space at the of the text
  const textToDisplay = `${formattedText.charAt(0).toUpperCase() +
    formattedText.slice(1)} `;
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
