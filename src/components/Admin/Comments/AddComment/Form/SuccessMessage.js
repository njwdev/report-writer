import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Button from '@material-ui/core/Button';
// Internal
import Message from '../../../../ui/Message';

const SuccessMessage = ({ onReset }) => {
  return (
    <div>
      <Message type='success'>Comment added successfully</Message>
      <Button onClick={onReset} variant='contained' color='primary' fullWidth>
        Add a new comment
      </Button>
    </div>
  );
};

SuccessMessage.propTypes = {
  onReset: PropTypes.func.isRequired
};

export default SuccessMessage;
