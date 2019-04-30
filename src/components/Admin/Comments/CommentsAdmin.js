import React, { Component } from 'react';
import { withFirebase } from '../../../firebase';
import CommentsList from './CommentsList';
import BackButton from '../../ui/Buttons/BackButton';

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

  render() {
    const { comments, loading } = this.state;

    return (
      <div>
        <h3>Comments</h3>
        <BackButton link="/admin" />
        {loading && <div>Loading ...</div>}
        <CommentsList comments={comments} />
      </div>
    );
  }
}

export default withFirebase(CommentsAdmin);
