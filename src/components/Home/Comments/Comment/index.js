import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const Comment = props => {
  const { text, onCommentAdd, name, pronoun } = props;

  const formattedText = text
    .replace(/1NNN/g, name)
    .replace(/1SSS/g, pronoun === 'male' ? 'he' : 'she')
    .replace(/1OOO/g, pronoun === 'male' ? 'him' : 'her')
    .replace(/1AAA/g, pronoun === 'male' ? 'his' : 'her')
    .replace(/1PPP/g, pronoun === 'male' ? 'his' : 'hers');

  const textToDisplay = `${formattedText.charAt(0).toUpperCase() + formattedText.slice(1)} `;
  return (
    <Paper style={{ margin: '3px 5px', padding: '3px' }}>
      <Typography variant="caption">{textToDisplay}</Typography>

      <div style={{ textAlign: 'right' }}>
        <IconButton color="secondary" onClick={() => onCommentAdd(textToDisplay)}>
          <Icon fontSize="small">add_comment</Icon>
        </IconButton>
      </div>
    </Paper>
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  onCommentAdd: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronoun: PropTypes.string.isRequired,
};
export default Comment;
