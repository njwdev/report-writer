import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Form from '../../../layout/Forms/Form';
import { withFirebase } from '../../../../firebase';
import { SubmitButton } from '../../../ui/Buttons';
import Message from '../../../ui/Message';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  success: false,
};

class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

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
    const { passwordOne, passwordTwo, error, success } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    return (
      <Form onSubmit={this.onSubmit}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">New Password</InputLabel>
          <Input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">Confirm New Password</InputLabel>
          <Input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" />
        </FormControl>

        <SubmitButton disabled={isInvalid}>Reset Password</SubmitButton>

        {success && (
          <div>
            <Message type="success">Password successfully changed</Message>
          </div>
        )}
        {error && <Message type="warning">{error.message}</Message>}
      </Form>
    );
  }
}

PasswordChangeForm.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(PasswordChangeForm);
