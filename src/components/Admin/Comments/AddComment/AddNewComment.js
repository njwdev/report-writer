import React, { Component } from 'react';
import { withFirebase } from '../../../../firebase';
import BackButton from '../../../ui/Buttons/BackButton';

const INITIAL_STATE = {
  type: '',
  comment: '',
  success: false,
  error: null,
};

class AddNewComment extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onSubmit = e => {
    const { type, comment } = this.state;
    const { firebase, history } = this.props;
    e.preventDefault();
    firebase
      .comments()
      .add({
        type,
        comment,
      })
      .then(() => this.setState({ ...INITIAL_STATE, success: true }))
      .catch(() => this.setState({ error: true }));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { comment, error, success } = this.state;

    const isInvalid = comment === '';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="comment" onChange={this.onChange} />
          <select onChange={this.onChange} name="type">
            <option value="intro"> Intro </option>
            <option value="positive"> Positive </option>
            <option value="negative"> Negative </option>
            <option value="closing"> Closing </option>
          </select>
          <button type="submit" disabled={isInvalid}>
            Submit
          </button>
        </form>
        {success ? <p>Comment added successfully</p> : null}
        {error ? error : null}
      </div>
    );
  }
}

export default withFirebase(AddNewComment);
