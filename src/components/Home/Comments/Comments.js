import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withFirebase } from '../../../firebase';
import Loader from '../../ui/Loader';
import CommentButtons from './CommentButtons';
import PaperContainer from '../../layout/Container/PaperContainer';

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

    const data = (title, comms) => ({ title, comms });

    const listItems = [
      data('Intros', introComments),
      data('Positives', positiveComments),
      data('Negatives', negativeComments),
      data('Closings', closingComments),
    ];

    return (
      <PaperContainer>
        <h3>Comments</h3>
        <Grid container direction="row" justify="center">
          {loading ? <Loader /> : null}
          {listItems.map(item => (
            <Grid item xs={6} key={item.title}>
              <CommentButtons title={item.title} comments={item.comms} />
            </Grid>
          ))}
        </Grid>
      </PaperContainer>
    );
  }
}

Comments.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(Comments);
