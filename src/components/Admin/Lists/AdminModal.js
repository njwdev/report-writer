import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalContent from './ModalContent';

class AdminModal extends Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { secondary, id, type, author, created } = this.props;

    const data = (title, text) => ({ title, text });

    const userListItems = [
      data('Email: ', secondary),
      data('Data type:', type),
      data('Created: ', created),
      data('ID:', id),
    ];

    const commentListItems = [
      data('Comment: ', secondary),
      data('Author:', author),
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

AdminModal.defaultProps = { author: undefined };

AdminModal.propTypes = {
  secondary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  author: PropTypes.string,
  created: PropTypes.string.isRequired,
};

export default AdminModal;
