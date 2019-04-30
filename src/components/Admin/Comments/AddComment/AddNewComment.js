import React, { Component } from 'react';
import { withFirebase } from '../../../../firebase';
import NewCommentForm from './NewCommentForm';
import Button from '@material-ui/core/Button';
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

  onReset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { comment, type, error, success } = this.state;

    const isInvalid = comment === '' || type === '';

    return (
      <div>
        {success ? (
          <div>
            <p>Comment added successfully</p>
            <Button
              text="Add another comment"
              link="/admin/comments/add_comment"
              onClick={this.onReset}
            >
              Add a new Comment
            </Button>
          </div>
        ) : (
          <div>
            <NewCommentForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              isInvalid={isInvalid}
            />
            {error ? error : null}
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(AddNewComment);
