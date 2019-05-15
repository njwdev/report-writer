import React, { Component } from 'react';
import { withFirebase } from '../../../../firebase';
import Checkbox from '@material-ui/core/Checkbox';
import * as ROLES from '../../../../constants/roles';

class MakeAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = { isAdmin: this.props.isAdmin, changed: false };
  }

  onCheck = e => {
    e.preventDefault();
    this.setState({
      isAdmin: !this.state.isAdmin,
      changed: !this.state.changed,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { firebase, uid } = this.props;
    const { isAdmin } = this.state;
    this.setState({ isAdmin: !this.state.isAdmin });
    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    if (firebase.user(uid) !== firebase.auth.currentUser) {
      firebase.user(uid).update({
        roles,
      });
    }
  };

  render() {
    const { isAdmin, changed } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Checkbox
          name="isAdmin"
          checked={isAdmin}
          onChange={this.onCheck}
          style={{ margin: '0px', padding: '0px' }}
        />
        {changed ? <button type="submit">Confirm</button> : null}
      </form>
    );
  }
}

export default withFirebase(MakeAdmin);
