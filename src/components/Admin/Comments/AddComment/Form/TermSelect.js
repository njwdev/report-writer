import React from 'react';
import PropTypes from 'prop-types';
// MUI
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const TermSelect = ({ term, onChange }) => {
  return (
    <FormControl fullWidth style={{ marginTop: '5px' }}>
      <InputLabel htmlFor='type-native-helper'>Term</InputLabel>
      <NativeSelect
        value={term}
        onChange={onChange}
        input={<FilledInput name='term' id='type-native-helper' />}
      >
        <option value='any'>Any</option>
        <option value='first'>First</option>
        <option value='second'>Second</option>
        <option value='third'>Third</option>
        <option value='summer'>Summer Course</option>
      </NativeSelect>
    </FormControl>
  );
};

TermSelect.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TermSelect;
