import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import ModalContainer from '../../../layout/Modals/ModalContainer';

const CommentButtons = props => {
  const { title, comments, onCommentAdd } = props;
  return (
    <ModalContainer title={title}>
      {comments.map(comment => (
        <Comment key={comment.uid} text={comment.comment} onCommentAdd={onCommentAdd} />
      ))}
    </ModalContainer>
  );
};

CommentButtons.propTypes = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  onCommentAdd: PropTypes.func.isRequired,
};

export default CommentButtons;
