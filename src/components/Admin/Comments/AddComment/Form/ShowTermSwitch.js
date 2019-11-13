import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ShowTermSwitch = ({ showTermSelect, onCheck, term }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={showTermSelect}
          onChange={onCheck}
          color='secondary'
          disabled={term !== 'any'}
        />
      }
      label='Term specific?'
      labelPlacement='start'
    />
  );
};

ShowTermSwitch.propTypes = {
  showTermSelect: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired
};

export default ShowTermSwitch;
