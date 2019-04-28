import React, { Component } from 'react';
import { withFirebase } from '../../../../firebase';
import changeFormStyles from './ChangeFormStyles';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onSubmit = e => {
    e.preventDefault();
    const { passwordOne } = this.state;
    const { firebase } = this.props;
    firebase
      .passwordUpdateHandler(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <i class="material-icons">lock</i>
          </Avatar>
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <form onSubmit={this.onSubmit}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="password">New Password</InputLabel>
              <Input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="New Password"
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="password">Confirm New Password</InputLabel>
              <Input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm New Password"
              />
            </FormControl>
            <FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isInvalid}
              >
                Reset Password
              </Button>
            </FormControl>

            {/* Needs to have a confirmation message / redirect after submit */}

            {error && <p>{error.message}</p>}
          </form>
        </Paper>
      </main>
    );
  }
}

export default withFirebase(withStyles(changeFormStyles)(PasswordChangeForm));
