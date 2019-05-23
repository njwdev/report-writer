import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CopyButton, ResetButton } from '../../ui/Buttons';
import PaperContainer from '../../layout/Container/PaperContainer';

const INITIAL_STATE = {
  commentValue: '',
  copied: false,
};

class CommentForm extends Component {
  state = { ...INITIAL_STATE };

  onCommentChange = e => {
    this.setState({ commentValue: e.target.value });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  onReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { commentValue, copied } = this.state;
    return (
      <PaperContainer>
        <h3>Form</h3>

        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                id="name"
                name="name"
                type="name"
                autoFocus
                // value={name}
                onChange={this.onChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
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
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={9}>
            <TextField
              id="outlined-full-width"
              label="Your comment"
              fullWidth
              multiline
              variant="outlined"
              value={commentValue}
              onChange={this.onCommentChange}
            />
          </Grid>
          <Grid item xs={3} style={{ textAlign: 'center' }}>
            <CopyButton onCopy={this.onCopy} value={commentValue} />
            {copied ? <div style={{ color: 'green', margin: '3px' }}>Copied!</div> : null}
          </Grid>
        </Grid>

        <ResetButton onClick={this.onReset} />
      </PaperContainer>
    );
  }
}

export default CommentForm;
