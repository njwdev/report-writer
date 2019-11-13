import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// Internal
import Comment from './Comment';
import Title from './Title';
import CommentTypeButton from './CommentTypeButton';

class CommentSelectModal extends Component {
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
        <CommentTypeButton
          title={title}
          handleClickOpen={this.handleClickOpen}
          disabled={disabled}
        />
        <Dialog
          fullWidth
          open={open}
          onClose={this.handleClose}
          aria-labelledby='comment-title'
        >
          <Title
            title={title}
            onShuffle={onShuffle}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
          />

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

CommentSelectModal.propTypes = {
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

export default CommentSelectModal;
