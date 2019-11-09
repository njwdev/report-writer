import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// MUI
import Grid from '@material-ui/core/Grid';
// Internal
import { withFirebase } from '../../../firebase';
import Loader from '../../ui/Loader';
import CommentButtons from './Buttons/CommentButtons';

const INITIAL_STATE = {
  loading: false,
  comments: [],
  searchValue: ''
};

// Shuffle function - Fisher-Yates shuffle
function shuffle(array) {
  /* -disable no-param-reassign */
  let currentIndex = array.length;
  let tempValue;
  let randomIndex;
  // While there remain elements to shuffle…
  while (currentIndex) {
    // Pick a remaining element…

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
        snapshot.forEach(doc => comments.push({ ...doc.data(), uid: doc.id }));
        this.setState({
          // Start with random order of comments
          comments: shuffle(comments),
          loading: false
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
    // 1. Make sure that comments with a different term type are filtered out
    const filteredComments = comments.filter(
      comment =>
        comment.term === termType || comment.term === 'any' || !comment.term
    );
    // 2. Add the function for searching for specific words/characters
    const commentsToDisplay = filteredComments.filter(c =>
      c.comment.includes(searchValue)
    );

    // 3. Filter the comments by type.
    const introComments = commentsToDisplay.filter(
      comment => comment.type === 'intro'
    );
    const positiveComments = commentsToDisplay.filter(
      comment => comment.type === 'positive'
    );
    const negativeComments = commentsToDisplay.filter(
      comment => comment.type === 'negative'
    );
    const closingComments = commentsToDisplay.filter(
      comment => comment.type === 'closing'
    );

    // 4. A function to make the lists and limit the comments shown to 5
    const data = (title, comms) => ({ title, comms });
    const listItems = [
      data('Intros', introComments.slice(0, 5)),
      data('Positives', positiveComments.slice(0, 5)),
      data('Negatives', negativeComments.slice(0, 5)),
      data('Closings', closingComments.slice(0, 5))
    ];

    return (
      <Fragment>
        {loading ? <Loader /> : null}
        <Grid container direction='row' justify='center'>
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
      </Fragment>
    );
  }
}

HomeComments.propTypes = {
  firebase: PropTypes.shape({}).isRequired,
  onCommentAdd: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronoun: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  termType: PropTypes.string.isRequired
};

export default withFirebase(HomeComments);
