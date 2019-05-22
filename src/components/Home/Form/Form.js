import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CopyButton from './CopyButton';

class CommentForm extends Component {
  state = {
    value: '',
    copied: false,
  };

  onCommentChange = e => {
    this.setState({ value: e.target.value });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  render() {
    const { value } = this.state;
    return (
      <Paper style={{ padding: '0px 5px' }}>
        <h3>Form</h3>
        <TextField
          id="outlined-full-width"
          label="Your comment"
          fullWidth
          variant="outlined"
          value={value}
          // onChange={({ target: { value } }) => this.setState({ value, copied: false })}
          onChange={this.onCommentChange}
        />
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={5}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Name</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                // value={email}
                onChange={this.onChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              style={{ display: 'inline' }}
              // className={classes.group}
              // value={this.state.value}
              // onChange={this.handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="she" />
              <FormControlLabel value="male" control={<Radio />} label="he" />
            </RadioGroup>
          </Grid>
          <Grid item xs={2}>
            <CopyButton onCopy={this.onCopy} value={value} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default CommentForm;
