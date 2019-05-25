import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { CopyButton } from '../../ui/Buttons';

const TextBox = props => {
  const { value, onChange, copied, onCopy } = props;
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={9}>
        <TextField
          id="outlined-full-width"
          label="Your comment"
          fullWidth
          multiline
          variant="outlined"
          value={value}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={3} style={{ textAlign: 'center' }}>
        <CopyButton onCopy={onCopy} value={value} copied={copied} />
        {copied ? (
          <Typography variant="caption" style={{ color: 'green', margin: '3px' }}>
            Copied!
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

TextBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default TextBox;
