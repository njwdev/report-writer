import React from 'react';
import PropTypes from 'prop-types';
// MUI
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const NameInput = ({ name, onNameChange }) => {
  return (
    <FormControl margin='normal' fullWidth>
      <InputLabel htmlFor='name'>Name</InputLabel>
      <Input
        id='name'
        name='name'
        type='name'
        autoFocus
        value={name}
        onChange={onNameChange}
      />
    </FormControl>
  );
};

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};
export default NameInput;
