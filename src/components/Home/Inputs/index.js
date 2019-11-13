import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Grid from '@material-ui/core/Grid';
// Internal
import AutoButton from './AutoButton';
import TermSelect from './TermSelect';
import PronounSelect from './PronounSelect';
import NameInput from './NameInput';

const Inputs = props => {
  const {
    onNameChange,
    name,
    pronounType,
    onPronounSelect,
    termType,
    onTermSelect,
    onGenerateRandom,
    commentValue
  } = props;

  return (
    <Grid container direction='row' justify='space-between' alignItems='center'>
      <Grid item xs={6}>
        <NameInput name={name} onNameChange={onNameChange} />
      </Grid>
      <Grid item xs={6} style={{ textAlign: 'center' }}>
        <PronounSelect
          pronounType={pronounType}
          onPronounSelect={onPronounSelect}
        />
      </Grid>
      <Grid item xs={6}>
        <TermSelect termType={termType} onTermSelect={onTermSelect} />
      </Grid>
      <Grid item xs={6}>
        <AutoButton
          name={name}
          pronounType={pronounType}
          commentValue={commentValue}
          onGenerateRandom={onGenerateRandom}
        />
      </Grid>
    </Grid>
  );
};

Inputs.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronounType: PropTypes.string.isRequired,
  onPronounSelect: PropTypes.func.isRequired,
  termType: PropTypes.string.isRequired,
  onTermSelect: PropTypes.func.isRequired
};

export default Inputs;
