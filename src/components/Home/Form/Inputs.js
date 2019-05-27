import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Inputs = props => {
  const { onNameChange, name, pronounType, onPronounSelect } = props;
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
          // className={classes.group}
          value={pronounType}
          onChange={onPronounSelect}
        >
          <FormControlLabel value="female" control={<Radio />} label="she" />
          <FormControlLabel value="male" control={<Radio />} label="he" />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

Inputs.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronounType: PropTypes.string.isRequired,
  onPronounSelect: PropTypes.func.isRequired,
};

export default Inputs;
