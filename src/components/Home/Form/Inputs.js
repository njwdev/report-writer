import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const Inputs = props => {
  const { onNameChange, name, pronounType, onPronounSelect, termType, onTermSelect } = props;
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={6}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" name="name" type="name" autoFocus value={name} onChange={onNameChange} />
        </FormControl>
      </Grid>
      <Grid item xs={6} style={{ textAlign: 'center' }}>
        <RadioGroup
          aria-label="Gender"
          name="pronounType"
          style={{ display: 'inline' }}
          value={pronounType}
          onChange={onPronounSelect}
        >
          <FormControlLabel value="female" control={<Radio />} label="she" />
          <FormControlLabel value="male" control={<Radio />} label="he" />
        </RadioGroup>
      </Grid>
      <FormControl fullWidth style={{ marginTop: '5px' }}>
        <InputLabel htmlFor="type-native-helper" shrink>
          Term
        </InputLabel>
        <NativeSelect
          value={termType}
          onChange={onTermSelect}
          input={<Input name="term" id="type-native-helper" />}
        >
          <option value="any">Any</option>
          <option value="first">First</option>
          <option value="second">Second</option>
          <option value="third">Third</option>
          <option value="summer">Summer Course</option>
        </NativeSelect>
      </FormControl>
    </Grid>
  );
};

Inputs.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronounType: PropTypes.string.isRequired,
  onPronounSelect: PropTypes.func.isRequired,
  termType: PropTypes.string.isRequired,
  onTermSelect: PropTypes.func.isRequired,
};

export default Inputs;
