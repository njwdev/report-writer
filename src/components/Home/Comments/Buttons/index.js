import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import ModalContainer from '../../../layout/Modals/ModalContainer';

const CommentButtons = props => {
  const { title, comments, onCommentAdd, name, pronoun, disabled } = props;
  return (
    <ModalContainer title={title} disabled={disabled}>
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
};

export default CommentButtons;
