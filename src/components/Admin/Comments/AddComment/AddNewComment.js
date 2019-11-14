import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// Internal
import { withFirebase } from '../../../../firebase';
import NewCommentForm from './Form/NewCommentForm';
import Message from '../../../ui/Message';
import SuccessMessage from './Form/SuccessMessage';
import Validation from './Form/Validation';
import commentCodes from '../../../../constants/commentCodes';

const INITIAL_STATE = {
  type: '',
  comment: '',
  author: '',
  created: '',
  term: 'any',
  showTermSelect: false,
  success: false,
  error: null
};

class AddNewComment extends Component {
  state = { ...INITIAL_STATE };

  componentWillUnmount() {
    this.setState({ ...INITIAL_STATE });
  }

  onSubmit = e => {
    const { type, comment, author, created, term } = this.state;
    const { firebase } = this.props;
    // Remove any whitespace before / after the comment
    e.preventDefault();
    if (comment !== '') {
      comment.trim();
    }
    // Add the comment to the firebase database
    firebase
      .comments()
      .add({
        type,
        comment,
        author,
        created,
        term
      })
      // Reset the state and add a success message
      .then(() => this.setState({ ...INITIAL_STATE, success: true }))
      .catch(() => this.setState({ error: true }));
  };

  onChange = e => {
    const { firebase } = this.props;

    this.setState({
      [e.target.name]: e.target.value,
      author: firebase.userAuth(),
      created: new Date()
    });
  };

  onToggleTermSelect = () => {
    const { showTermSelect } = this.state;
    this.setState({ showTermSelect: !showTermSelect });
  };

  onReset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { comment, type, error, success, term, showTermSelect } = this.state;
    // The comment should end with either a full stop or an exclamation if the comment type is closing
    let endingIsValid = comment.charAt(comment.length - 1) === '.';
    if (type === 'closing' && comment.charAt(comment.length - 1) === '!') {
      endingIsValid = true;
    }

    const hasCode = () => {
      const array = Object.values(commentCodes).map(item => {
        return comment.includes(item) ? true : false;
      });
      return array.includes(true);
    };

    const includesCode = hasCode();
    // Check there is something in the comment, and that the type has been assigned, and the ending is ok
    const isInvalid =
      type === '' || comment.length < 10 || !endingIsValid || !includesCode;

    return (
      <Fragment>
        {success ? (
          <SuccessMessage onReset={this.onReset} />
        ) : (
          <Fragment>
            <NewCommentForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              isInvalid={isInvalid}
              term={term}
              showTermSelect={showTermSelect}
              onCheck={this.onToggleTermSelect}
            />
            <Validation
              endingIsValid={endingIsValid}
              includesCode={includesCode}
              comment={comment}
              type={type}
            />
            {error ? <Message type='warning'>{error}</Message> : null}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

AddNewComment.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(AddNewComment);
