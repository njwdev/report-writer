import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteButton from '../Buttons/DeleteButton';

class AdminModal extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { primary, secondary, id, type, onDelete } = this.props;

    const data = (title, text) => {
      return { title, text };
    };

    const listItems = [
      data(type === 'User' ? 'Email: ' : null, secondary),
      data('Data type:', type),
      data('ID:', id),
      // data('Created:', timeStamp),
    ];

    return (
      <div>
        <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
          <Icon>add</Icon>
        </IconButton>

        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">{primary}</DialogTitle>
          <DialogContent>
            {listItems.map(item => (
              <DialogContentText key={item.title}>
                <strong>{item.title} </strong>
                {item.text}
              </DialogContentText>
            ))}
          </DialogContent>
          <DialogActions>
            {onDelete ? <DeleteButton onDelete={onDelete} id={id} /> : null}
            <Button onClick={this.handleClose} color="primary">
              Back
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AdminModal;
