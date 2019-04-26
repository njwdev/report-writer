import React from 'react';

const CommentsList = props => {
  const { comments } = props;
  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.uid}>
            <span>
              <strong>ID:</strong> {comment.uid}
            </span>
            <span>
              <strong>Type:</strong> {comment.type}
            </span>
            <span>
              <strong>Comment:</strong> {comment.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
