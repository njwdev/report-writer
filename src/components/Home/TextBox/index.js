import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const TextBox = props => {
  const {} = props;
  return (
    <Paper style={{ padding: 8 }}>
      <TextField
        id="outlined-full-width"
        label="Your comment"
        // style={{ margin: 8 }}
        // placeholder="Your comment here"
        helperText="Start selecting comments to build your report"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
      />
    </Paper>
  );
};

export default TextBox;
