import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilledInput from '@material-ui/core/FilledInput';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Comment from '../Comment/Comment';

class CommentButtons extends Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const {
      title,
      comments,
      onCommentAdd,
      name,
      pronoun,
      disabled,
      searchValue,
      onSearchChange,
      onShuffle,
    } = this.props;
    return (
      <div style={{ margin: ' 3px' }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.handleClickOpen}
          disabled={disabled}
        >
          {title}
        </Button>

        <Dialog fullWidth open={open} onClose={this.handleClose} aria-labelledby="comment-title">
          <DialogTitle id="comment-title">{title}</DialogTitle>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ margin: 'auto', padding: '10px' }}
          >
            <Grid item xs={7}>
              <FormControl fullWidth>
                <InputLabel htmlFor="includes">Includes...</InputLabel>
                <FilledInput
                  autoFocus
                  id="includes"
                  name="includes"
                  value={searchValue}
                  onChange={onSearchChange}
                />
              </FormControl>
            </Grid>
            <Grid item style={{ margin: 'auto', padding: '3px' }}>
              <IconButton onClick={onShuffle}>
                <Icon>replay</Icon>
              </IconButton>
            </Grid>
          </Grid>

          {comments.map(comment => (
            <Comment
              key={comment.uid}
              text={comment.comment}
              onCommentAdd={onCommentAdd}
              name={name}
              pronoun={pronoun}
              disabled={disabled}
              closeModal={this.handleClose}
            />
          ))}
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Back
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CommentButtons.propTypes = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  onCommentAdd: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pronoun: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onShuffle: PropTypes.func.isRequired,
};

export default CommentButtons;
