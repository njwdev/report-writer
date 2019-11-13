import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const PronounSelect = ({ pronounType, onPronounSelect }) => {
  return (
    <RadioGroup
      aria-label='Gender'
      name='pronounType'
      style={{ display: 'inline' }}
      value={pronounType}
      onChange={onPronounSelect}
    >
      <FormControlLabel value='female' control={<Radio />} label='she' />
      <FormControlLabel value='male' control={<Radio />} label='he' />
    </RadioGroup>
  );
};

PronounSelect.propTypes = {
  pronounType: PropTypes.string.isRequired,
  onPronounSelect: PropTypes.func.isRequired
};

export default PronounSelect;
