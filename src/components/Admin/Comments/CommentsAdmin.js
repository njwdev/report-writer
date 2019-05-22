import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withFirebase } from '../../../firebase';
import CommentsList from './CommentsList';
import { LinkButton } from '../../ui/Buttons';
import Loader from '../../ui/Loader';

const INITIAL_STATE = {
  loading: false,
  comments: [],
};

class CommentsAdmin extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({ loading: true });
    const { firebase } = this.props;
    this.commentList = firebase.comments().onSnapshot(snapshot => {
      const comments = [];
      snapshot.forEach(doc => comments.push({ ...doc.data(), uid: doc.id }));
      this.setState({
        comments,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.commentList();
  }

  onDeleteHandler = id => {
    const { firebase } = this.props;
    firebase.comment(id).delete();
  };

  render() {
    const { comments, loading } = this.state;

    return (
      <div>
        <LinkButton color="primary" link="admin/comments/add_comment">
          Add Comment
        </LinkButton>
        {loading && <Loader />}
        <CommentsList comments={comments} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

CommentsAdmin.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(CommentsAdmin);
