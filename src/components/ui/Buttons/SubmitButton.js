import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton = props => {
  const { children, disabled } = props;
  return (
    <Button
      style={{ margin: '5px auto' }}
      fullWidth
      type="submit"
      variant="contained"
      color="primary"
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
