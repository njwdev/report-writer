import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

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
    const { title, comments } = this.props;
    return (
      <div style={{ margin: '3px' }}>
        <Button variant="contained" color="primary" fullWidth onClick={this.handleClickOpen}>
          {title}
        </Button>
        <Dialog
          fullWidth
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            {comments.map(comment => (
              <div key={comment.uid}>
                <Typography style={{ border: '1px solid black' }}>{comment.comment}</Typography>
              </div>
            ))}
          </DialogContent>
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
};

export default CommentModal;
