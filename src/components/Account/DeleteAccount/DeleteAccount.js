import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from '../../../firebase';
import { DeleteButton } from '../../ui/Buttons';
import Message from '../../ui/Message';

class DeleteAccount extends Component {
  state = { error: false };

  deleteUser = id => {
    const { firebase } = this.props;
    firebase.deleteUserHandler();
    firebase
      .user(id)
      .delete()
      .catch(() => this.setState({ error: true }));
  };

  render() {
    const { error } = this.state;
    const { firebase } = this.props;
    return (
      <div>
        <DeleteButton
          text="Delete Account"
          full
          onDelete={this.deleteUser}
          id={firebase.auth.currentUser.uid}
        />

        {error && <Message type="warning">This operation requires a recent login</Message>}
      </div>
    );
  }
}

DeleteAccount.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(DeleteAccount);
