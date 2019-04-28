import React, { Component } from 'react';
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
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        {success && (
          <p>
            An email has been sent with instructions on how to reset your
            password
            <a href="/signin">Back</a>
          </p>
        )}
        {error && <p>There was a problem with your request</p>}
      </form>
    );
  }
}

export default withFirebase(ForgetForm);
