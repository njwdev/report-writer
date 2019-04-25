import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../../firebase';
import * as ROUTES from '../../../constants/routes';
import signInStyles from './SignInStyles';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import PasswordForgetButton from './PasswordForgetButton';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInUser extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = e => {
    const { email, password } = this.state;
    const { firebase, history } = this.props;
    e.preventDefault();
    firebase
      .signInWithEmailAndPasswordHandler(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          {/* 3D background box behing signin*/}
          <Avatar className={classes.avatar}>
            <i className="material-icons">lock_open</i>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.onSubmit} className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={this.onChange}
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={this.onChange}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
            >
              Sign in
            </Button>
            <PasswordForgetButton />
            {error && <p>{error.message}</p>}
          </form>
        </Paper>
      </main>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInUser);

export default withStyles(signInStyles)(SignInForm);
