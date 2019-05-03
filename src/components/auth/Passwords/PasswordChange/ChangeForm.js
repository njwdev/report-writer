import React, { Component } from 'react';
import { withFirebase } from '../../../../firebase';
import Form from '../../../../utility/Form/Form';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SubmitButton from '../../../../utility/SubmitButton/SubmitButton';
import BackButton from '../../../ui/Buttons/BackButton';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  success: false,
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
        this.setState({ ...INITIAL_STATE, success: true });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    return (
      <Form onSubmit={this.onSubmit}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">New Password</InputLabel>
          <Input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">Confirm New Password</InputLabel>
          <Input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
          />
        </FormControl>
        <FormControl>
          <SubmitButton disabled={isInvalid}>Reset Password</SubmitButton>
        </FormControl>

        {this.success && (
          <p>
            Password successfully changed <BackButton link="/account" />
          </p>
        )}
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
