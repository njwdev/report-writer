import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Loader from '../../ui/Loader';
import CommentButtons from './Buttons';
import { withFirebase } from '../../../firebase';
import PaperContainer from '../../layout/Container/PaperContainer';

const INITIAL_STATE = {
  loading: false,
  comments: [],
  searchValue: '',
};

// Shuffle function - Fisher-Yates shuffle (eslint rules disabled for the function)
function shuffle(array) {
  /* eslint-disable no-param-reassign */
  let currentIndex = array.length;
  let tempValue;
  let randomIndex;
  // While there remain elements to shuffle…
  while (currentIndex) {
    // Pick a remaining element…
    // eslint-disable-next-line no-plusplus
    randomIndex = Math.floor(Math.random() * currentIndex--);
    // And swap it with the current element.
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}

class HomeComments extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { firebase } = this.props;
    this.setState({ loading: true });
    this.commentList = firebase
      .comments()
      .orderBy('created')
      .onSnapshot(snapshot => {
        const comments = [];
        // snapshot.forEach(doc => comments.push({ ...doc.data(), uid: doc.id }));
        snapshot.forEach(doc => comments.push({ ...doc.data(), uid: doc.id }));
        this.setState({
          comments: shuffle(comments),
          loading: false,
        });
      });
  }

  onShuffle = () => {
    const { comments } = this.state;
    this.setState({ comments: shuffle(comments) });
  };

  onSearchChange = e => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { comments, loading, searchValue } = this.state;
    const { onCommentAdd, name, pronoun, disabled, termType } = this.props;

    const filteredComments = comments.filter(
      comment => comment.term === termType || comment.term === 'any' || !comment.term,
    );

    const commentsToDisplay = filteredComments.filter(c => c.comment.includes(searchValue));

    const introComments = commentsToDisplay.filter(comment => comment.type === 'intro');
    const positiveComments = commentsToDisplay.filter(comment => comment.type === 'positive');
    const negativeComments = commentsToDisplay.filter(comment => comment.type === 'negative');
    const closingComments = commentsToDisplay.filter(comment => comment.type === 'closing');

    const data = (title, comms) => ({ title, comms });

    const listItems = [
      data('Intros', introComments.slice(0, 5)),
      data('Positives', positiveComments.slice(0, 5)),
      data('Negatives', negativeComments.slice(0, 5)),
      data('Closings', closingComments.slice(0, 5)),
    ];

    return (
      <PaperContainer>
        {loading ? <Loader /> : null}
        <Grid container direction="row" justify="center">
          {listItems.map(item => (
            <Grid item xs={6} key={item.title}>
              <CommentButtons
                title={item.title}
                comments={item.comms}
                onCommentAdd={onCommentAdd}
                name={name}
                pronoun={pronoun}
                disabled={disabled}
                searchValue={searchValue}
                onSearchChange={this.onSearchChange}
                onShuffle={this.onShuffle}
              />
            </Grid>
          ))}
        </Grid>
      </PaperContainer>
    );
  }
}

HomeComments.propTypes = {
  firebase: PropTypes.shape({}).isRequired,
  onCommentAdd: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronoun: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  termType: PropTypes.string.isRequired,
};

export default withFirebase(HomeComments);
