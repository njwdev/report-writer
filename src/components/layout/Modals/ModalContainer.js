import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

class ModalContainer extends React.Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { title, children } = this.props;
    return (
      <div style={{ margin: '3px' }}>
        <Button variant="contained" color="primary" fullWidth onClick={this.handleClickOpen}>
          {title}
        </Button>
        <Dialog fullWidth open={open} onClose={this.handleClose} aria-labelledby="comment-title">
          <DialogTitle id="comment-title">{title}</DialogTitle>
          {children}
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

ModalContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalContainer;
