import React from 'react';
// MUI
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const TextBox = ({ comment, onChange }) => {
  return (
    <FormControl fullWidth>
      <TextField
        multiline
        variant='outlined'
        label='Add comment'
        value={comment}
        name='comment'
        type='comment'
        id='comment'
        onChange={onChange}
      />
    </FormControl>
  );
};

export default TextBox;
