import React from 'react';
// MUI
import Button from '@material-ui/core/Button';

const CommentTypeButton = ({ title, handleClickOpen, disabled }) => {
  return (
    <Button
      variant='contained'
      color='primary'
      fullWidth
      onClick={handleClickOpen}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default CommentTypeButton;
