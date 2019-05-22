import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withFirebase } from '../../../firebase';
import * as ROUTES from '../../../constants/routes';
import Form from '../../layout/Forms/Form';
import Message from '../../ui/Message';
import { SubmitButton, LinkButton } from '../../ui/Buttons';

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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmit={this.onSubmit}>
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

        <SubmitButton disabled={isInvalid}>Sign in</SubmitButton>

        {error && (
          <Message type="warning">
            There was a problem with your sign in. Check your email and/or password
          </Message>
        )}
        <LinkButton link="password_forget" color="secondary" variant="text" size="small" fullWidth>
          Forgotten your password?
        </LinkButton>
        <LinkButton link="signup" color="primary" variant="outlined" size="small" fullWidth>
          Don&apos;t have an account? Sign up here
        </LinkButton>
      </Form>
    );
  }
}

SignInUser.propTypes = {
  firebase: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInUser);

export default SignInForm;
