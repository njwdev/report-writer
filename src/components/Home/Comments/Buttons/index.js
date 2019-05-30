import React from 'react';
import PropTypes from 'prop-types';
import FilledInput from '@material-ui/core/FilledInput';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Comment from '../Comment';
import ModalContainer from '../../../layout/Modals/ModalContainer';

const CommentButtons = props => {
  const {
    title,
    comments,
    onCommentAdd,
    name,
    pronoun,
    disabled,
    searchValue,
    onSearchChange,
  } = props;
  return (
    <ModalContainer title={title} disabled={disabled}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
          <FormControl fullWidth>
            <InputLabel htmlFor="includes">Includes...</InputLabel>
            <FilledInput
              id="includes"
              name="includes"
              value={searchValue}
              onChange={onSearchChange}
            />
          </FormControl>
        </Grid>
      </Grid>

      {comments.map(comment => (
        <Comment
          key={comment.uid}
          text={comment.comment}
          onCommentAdd={onCommentAdd}
          name={name}
          pronoun={pronoun}
          disabled={disabled}
        />
      ))}
    </ModalContainer>
  );
};

CommentButtons.propTypes = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  onCommentAdd: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronoun: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default CommentButtons;
