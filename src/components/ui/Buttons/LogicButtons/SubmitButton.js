import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Button from '@material-ui/core/Button';

const SubmitButton = ({ children, disabled }) => {
  return (
    <Button
      style={{ margin: '5px auto' }}
      fullWidth
      type='submit'
      variant='contained'
      color='primary'
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
