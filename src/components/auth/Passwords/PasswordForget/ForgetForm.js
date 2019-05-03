import React, { Component } from 'react';
import Form from '../../../../utility/Form/Form';
import SubmitButton from '../../../../utility/SubmitButton/SubmitButton';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withFirebase } from '../../../../firebase';

const INITIAL_STATE = {
  email: '',
  error: null,
  success: false,
};

class ForgetForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    const { firebase } = this.props;
    firebase
      .passwordResetHandler(email)
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
    const { email, error, success } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormControl>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            autoFocus
            autoComplete="email"
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl>
          <SubmitButton disabled={isInvalid}>Reset My Password</SubmitButton>
        </FormControl>
      {success && (
          <p>
            An email has been sent with instructions on how to reset your
            password
            <a href="/signin">Back</a>
          </p>
        )}
        {error && <p>There was a problem with your request</p>}
      </Form>
    )
  }
}

export default withFirebase(ForgetForm);
