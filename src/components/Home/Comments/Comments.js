import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withFirebase } from '../../../firebase';
import Loader from '../../ui/Loader';

const INITIAL_STATE = {
  loading: false,
  comments: [],
};

class Comments extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { firebase } = this.props;
    this.setState({ loading: true });
    this.commentList = firebase.comments().onSnapshot(snapshot => {
      const comments = [];
      snapshot.forEach(doc => comments.push({ ...doc.data(), uid: doc.id }));
      this.setState({
        comments,
        loading: false,
      });
    });
  }

  render() {
    const { comments, loading } = this.state;

    const introComments = comments.filter(comment => comment.type === 'intro');
    const positiveComments = comments.filter(comment => comment.type === 'positive');
    const negativeComments = comments.filter(comment => comment.type === 'negative');
    const closingComments = comments.filter(comment => comment.type === 'closing');

    return (
      <div>
        <h1>Comments</h1>
        {loading ? <Loader /> : null}
        <div>
          <h4>Intros</h4>
          {introComments.map(comment => (
            <div key={comment.uid}>{comment.comment}</div>
          ))}
        </div>
        <div>
          <h4>Positive</h4>
          {positiveComments.map(comment => (
            <div key={comment.uid}>{comment.comment}</div>
          ))}
        </div>
        <div>
          <h4>Negative</h4>
          {negativeComments.map(comment => (
            <div key={comment.uid}>{comment.comment}</div>
          ))}
        </div>
        <div>
          <h4>Closing</h4>
          {closingComments.map(comment => (
            <div key={comment.uid}>{comment.comment}</div>
          ))}
        </div>
      </div>
    );
  }
}

Comments.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(Comments);
