import React, { Component } from 'react';
import { withFirebase } from '../../../firebase';
import CommentsList from './CommentsList';
import LinkButton from '../../ui/Buttons/LinkButton';
import Loader from '../../ui/Loader';

const INITIAL_STATE = {
  loading: false,
  comments: [],
};

class CommentsAdmin extends Component {
  state = { ...INITIAL_STATE };
  componentDidMount() {
    this.setState({ loading: true });
    this.commentList = this.props.firebase.comments().onSnapshot(snapshot => {
      let comments = [];
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

export default withFirebase(CommentsAdmin);
