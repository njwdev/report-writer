import React, { Component, Fragment } from 'react';
import { withFirebase } from '../../../../firebase';

import * as ROLES from '../../../../constants/roles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class MakeAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: this.props.isAdmin,
      changed: false,
    };
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
    if (!isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    //Not working currently - should be check to stop deleting yourself as admin
    if (firebase.user(uid) !== firebase.auth.currentUser.uid) {
      firebase.user(uid).update({
        roles,
      });
    }
  };

  render() {
    const { isAdmin } = this.state;
    const { firebase, uid } = this.props;

    return (
      <Fragment>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                name="isAdmin"
                checkedIcon={<i className="material-icons">verified_user</i>}
                checked={isAdmin}
                onChange={this.onSubmit}
                style={{ margin: '0px', padding: '0px' }}
                disabled={uid === firebase.userUid()}
              />
            }
            label={isAdmin ? 'Admin' : 'Not Admin'}
          />
        </FormGroup>
      </Fragment>
    );
  }
}

export default withFirebase(MakeAdmin);
