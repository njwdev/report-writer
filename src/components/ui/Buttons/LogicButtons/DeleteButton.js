import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeleteButton extends Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { onDelete, id, text, full } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth={full}
          onClick={this.handleClickOpen}
        >
          {text || 'Delete'}
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          maxWidth="xs"
          aria-labelledby="alert-title"
          aria-describedby="alert-description"
        >
          <DialogTitle id="alert-title">Delete?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-description">
              Are you sure you want to delete? This is action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => onDelete(id)} color="secondary" variant="text">
              Delete
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              No, go back
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DeleteButton.defaultProps = { text: undefined, full: undefined };

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  full: PropTypes.bool,
};

export default DeleteButton;
