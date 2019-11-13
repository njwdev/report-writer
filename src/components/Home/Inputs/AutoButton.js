import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Button from '@material-ui/core/Button';

const AutoButton = ({ name, pronounType, commentValue, onGenerateRandom }) => {
  return (
    <Button
      disabled={!name || !pronounType || commentValue !== ''}
      variant='contained'
      fullWidth
      color='secondary'
      onClick={() => onGenerateRandom(name, pronounType)}
    >
      Auto
    </Button>
  );
};

AutoButton.propTypes = {
  name: PropTypes.string.isRequired,
  pronounType: PropTypes.string.isRequired,
  commentValue: PropTypes.string.isRequired,
  onGenerateRandom: PropTypes.func.isRequired
};
export default AutoButton;
