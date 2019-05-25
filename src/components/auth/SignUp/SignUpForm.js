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
import { SubmitButton, LinkButton } from '../../ui/Buttons';
import Message from '../../ui/Message';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  created: '',
  error: null,
};

class SignUpNewUser extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = e => {
    const { username, email, passwordOne, created } = this.state;
    const { firebase, history } = this.props;
    const roles = {};

    e.preventDefault();
    firebase
      .createUserWithEmailAndPasswordHandler(email, passwordOne)
      .then(authUser => firebase.user(authUser.user.uid).set(
        {
          username,
          email,
          roles,
          created,
        },
        { merge: true },
      ))

      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, created: new Date() });
  };

  onCheck = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="username">Name</InputLabel>
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="passwordOne"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordOne}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">Confirm Password</InputLabel>
          <Input
            name="passwordTwo"
            type="password"
            id="confirm-password"
            autoComplete="current-password"
            value={passwordTwo}
            onChange={this.onChange}
          />
        </FormControl>

        <SubmitButton disabled={isInvalid}>Sign up</SubmitButton>

        {error && <Message type="warning">{error.message}</Message>}
        <LinkButton link="login" color="secondary" variant="outlined" size="small" fullWidth>
          Already have an account? Login here
        </LinkButton>
      </Form>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpNewUser);

SignUpNewUser.propTypes = {
  firebase: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default SignUpForm;
