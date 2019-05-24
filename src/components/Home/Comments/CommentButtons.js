import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Comment from './Comment/Comment';

class CommentModal extends React.Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { title, comments, onCommentAdd } = this.props;
    return (
      <div style={{ margin: '3px' }}>
        <Button variant="contained" color="primary" fullWidth onClick={this.handleClickOpen}>
          {title}
        </Button>
        <Dialog fullWidth open={open} onClose={this.handleClose} aria-labelledby="comment-title">
          <DialogTitle id="comment-title">{title}</DialogTitle>
          {comments.map(comment => (
            <Comment key={comment.uid} text={comment.comment} onClick={onCommentAdd} />
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

CommentModal.propTypes = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  onCommentAdd: PropTypes.func.isRequired,
};

export default CommentModal;
