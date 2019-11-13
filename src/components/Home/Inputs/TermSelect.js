import React from 'react';
import PropTypes from 'prop-types';
// MUI
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const TermSelect = ({ termType, onTermSelect }) => {
  return (
    <FormControl fullWidth style={{ marginTop: '5px' }}>
      <InputLabel htmlFor='type-native-helper' shrink>
        Term
      </InputLabel>
      <NativeSelect
        value={termType}
        onChange={onTermSelect}
        input={<Input name='term' id='type-native-helper' />}
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
  termType: PropTypes.string.isRequired,
  onTermSelect: PropTypes.func.isRequired
};

export default TermSelect;
