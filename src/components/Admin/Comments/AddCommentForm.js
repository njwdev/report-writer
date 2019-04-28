import React, { Component } from 'react';
import { withFirebase } from '../../../firebase';
import * as ROUTES from '../../../constants/routes';

const INITIAL_STATE = {
  type: '',
  comment: '',
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
    return firebase
      .comments()
      .add({
        type,
        comment,
      })

      .then(() => history.push(ROUTES.COMMENTS_LIST))
      .catch(() => this.setState({ error: true }));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { comment, error } = this.state;

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
        {error ? error : null}
      </div>
    );
  }
}

export default withFirebase(AddNewComment);
