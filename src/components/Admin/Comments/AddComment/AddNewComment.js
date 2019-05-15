import React, { Component } from 'react';
import { withFirebase } from '../../../../firebase';
import NewCommentForm from './NewCommentForm';
import Button from '@material-ui/core/Button';
import Message from '../../../ui/Message';
const INITIAL_STATE = {
  type: '',
  comment: '',
  author: '',
  created: '',
  success: false,
  error: null,
};

class AddNewComment extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onSubmit = e => {
    const { type, comment, author, created } = this.state;
    const { firebase } = this.props;
    e.preventDefault();

    firebase
      .comments()
      .add({
        type,
        comment,
        author,
        created,
      })

      .then(() => this.setState({ ...INITIAL_STATE, success: true }))
      .catch(() => this.setState({ error: true }));
  };

  onChange = e => {
    const { firebase } = this.props;
    console.log(firebase.userAuth());
    this.setState({
      [e.target.name]: e.target.value,
      author: firebase.userAuth(),
      created: new Date(),
    });
  };

  onReset = () => this.setState({ ...INITIAL_STATE });

  componentWillUnmount() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { comment, type, error, success } = this.state;

    const isInvalid = comment === '' || type === '';

    return (
      <div>
        {success ? (
          <div>
            <Message type="success">Comment added successfully</Message>
            <Button
              onClick={this.onReset}
              variant="contained"
              color="primary"
              fullWidth
            >
              Add a new comment
            </Button>
          </div>
        ) : (
          <div>
            <NewCommentForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              isInvalid={isInvalid}
            />
            {error ? <Message type="warning">{error}</Message> : null}
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(AddNewComment);
