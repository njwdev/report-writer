import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
// Internal
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
      onShuffle
    } = this.props;
    return (
      <div style={{ margin: ' 3px' }}>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={this.handleClickOpen}
          disabled={disabled}
        >
          {title}
        </Button>

        <Dialog
          fullWidth
          open={open}
          onClose={this.handleClose}
          aria-labelledby='comment-title'
        >
          <DialogTitle id='comment-title'>
            {title}
            <Button
              onClick={onShuffle}
              variant='outlined'
              color='primary'
              style={{ float: 'right' }}
            >
              Random
            </Button>
            <div>
              <Input
                placeholder='includes...'
                autoFocus={false}
                id='includes'
                name='includes'
                value={searchValue}
                onChange={onSearchChange}
              />
            </div>
          </DialogTitle>

          <DialogContent>
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
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
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
  onShuffle: PropTypes.func.isRequired
};

export default CommentButtons;
