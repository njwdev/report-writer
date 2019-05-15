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
import Divider from '@material-ui/core/Divider';
import MakeAdmin from '../../Admin/Users/MakeAdminForm/MakeAdmin';

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
    const {
      primary,
      secondary,
      id,
      type,
      onDelete,
      isAdmin,
      author,
      created,
    } = this.props;

    const data = (title, text) => {
      return { title, text };
    };

    const listItems = [
      data(type === 'User' ? 'Email: ' : null, secondary),
      data(
        type === 'Comment' ? 'Author:' : null,
        type === 'Comment' ? author : null,
      ),
      data('Data type:', type),
      data('Created:', created),
      data('ID:', id),
    ];

    // const makeAdmin = data(
    //   type === 'User' ? 'Admin:' : null,
    //   type === 'User' ? (
    //     <MakeAdmin isAdmin={isAdmin === 'ADMIN' ? true : false} uid={id} />
    //   ) : null,
    // );

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
              <DialogContentText key={Math.random()}>
                <strong>{item.title} </strong>
                {item.text}
              </DialogContentText>
            ))}
          </DialogContent>
          <Divider />
          <DialogContent>
            <DialogContentText>
              <strong>Admin Status:</strong>
            </DialogContentText>
            {
              (type === 'User' ? 'Admin:' : null,
              type === 'User' ? (
                <MakeAdmin
                  isAdmin={isAdmin === 'ADMIN' ? true : false}
                  uid={id}
                />
              ) : null)
            }
          </DialogContent>
          <DialogActions style={{}}>
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
