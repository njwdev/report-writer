import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Loader from '../../ui/Loader';
import CommentButtons from '../Comments/CommentButtons';
import { withFirebase } from '../../../firebase';
import { CopyButton, ResetButton } from '../../ui/Buttons';
import PaperContainer from '../../layout/Container/PaperContainer';

const INITIAL_STATE = {
  // copy section
  commentValue: '',
  copied: false,
  // comments section
  loading: false,
  comments: [],
};

class CommentForm extends Component {
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

  onCommentChange = e => {
    this.setState({ commentValue: e.target.value });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  onReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  onCommentAdd = () => {
    console.log('comment added');
  };

  render() {
    const { commentValue, copied, comments, loading } = this.state;

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
      <Fragment>
        <PaperContainer>
          <h3>Form</h3>

          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={6}>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  type="name"
                  autoFocus
                  // value={name}
                  onChange={this.onChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                style={{ display: 'inline' }}
                // className={classes.group}
                // value={this.state.value}
                // onChange={this.handleChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="she" />
                <FormControlLabel value="male" control={<Radio />} label="he" />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={9}>
              <TextField
                id="outlined-full-width"
                label="Your comment"
                fullWidth
                multiline
                variant="outlined"
                value={commentValue}
                onChange={this.onCommentChange}
              />
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
              <CopyButton onCopy={this.onCopy} value={commentValue} copied={copied} />
              {copied ? (
                <Typography variant="caption" style={{ color: 'green', margin: '3px' }}>
                  Copied!
                </Typography>
              ) : null}
            </Grid>
          </Grid>

          <ResetButton onClick={this.onReset} />
        </PaperContainer>

        <PaperContainer>
          <h3>Comments</h3>
          <Grid container direction="row" justify="center">
            {loading ? <Loader /> : null}
            {listItems.map(item => (
              <Grid item xs={6} key={item.title}>
                <CommentButtons
                  title={item.title}
                  comments={item.comms}
                  onCommentAdd={this.onCommentAdd}
                />
              </Grid>
            ))}
          </Grid>
        </PaperContainer>
      </Fragment>
    );
  }
}

CommentForm.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(CommentForm);
