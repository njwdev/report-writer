import React, { Component } from 'react';
import Form from '../../../layout/Forms/Form';
import SubmitButton from '../../../ui/Buttons/SubmitButton';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withFirebase } from '../../../../firebase';
import Message from '../../../ui/Message';
import BackButton from '../../../ui/Buttons/BackButton';

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

        <SubmitButton disabled={isInvalid}>Reset My Password</SubmitButton>
        <BackButton link="/signin" />
        {success && (
          <div>
            <Message type="success">
              An email has been sent with instructions on how to reset your
              password
            </Message>
          </div>
        )}
        {error && <Message>There was a problem with your request</Message>}
      </Form>
    );
  }
}

export default withFirebase(ForgetForm);
