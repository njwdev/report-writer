import React from 'react';
import PropTypes from 'prop-types';
// MUI
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const CommentType = ({ type, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor='type-native-helper'>Type</InputLabel>
      <NativeSelect
        value={type}
        onChange={onChange}
        input={<Input name='type' id='type-native-helper' />}
      >
        <option value='' />
        <option value='intro'>Intro</option>
        <option value='positive'>Positive</option>
        <option value='negative'>Negative</option>
        <option value='closing'>Closing</option>
      </NativeSelect>
    </FormControl>
  );
};

CommentType.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CommentType;
