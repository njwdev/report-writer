import React, { Component } from 'react';
import ModalContent from './ModalContent';

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
    const { secondary, id, type, author, created } = this.props;

    const data = (title, text) => {
      return { title, text };
    };

    const userListItems = [
      data('Email: ', secondary),
      data('Data type:', type),
      data('Created:', created),
      data('ID:', id),
    ];

    const commentListItems = [
      data(null, secondary),
      data('Author', author),
      data('Data type:', type),
      data('Created:', created),
      data('ID:', id),
    ];

    const listItems = type === 'User' ? userListItems : commentListItems;

    return (
      <div>
        <ModalContent
          {...this.props}
          open={open}
          onOpen={this.handleClickOpen}
          onClose={this.handleClose}
          listItems={listItems}
        />
      </div>
    );
  }
}

export default AdminModal;
