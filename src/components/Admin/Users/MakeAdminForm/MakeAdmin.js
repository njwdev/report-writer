import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as ROLES from '../../../../constants/roles';
import { withFirebase } from '../../../../firebase';

class MakeAdmin extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    isAdmin: this.props.isAdmin,
    changed: false,
  };

  onCheck = e => {
    const { isAdmin, changed } = this.state;
    e.preventDefault();
    this.setState({
      isAdmin: !isAdmin,
      changed: !changed,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { firebase, uid } = this.props;
    const { isAdmin } = this.state;
    this.setState({ isAdmin: !isAdmin });
    const roles = {};
    if (!isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    if (firebase.user(uid) !== firebase.auth.currentUser.uid) {
      firebase.user(uid).update({ roles });
    }
  };

  render() {
    const { isAdmin } = this.state;
    const { firebase, uid } = this.props;

    return (
      <Fragment>
        <FormGroup row>
          <FormControlLabel
            control={(
              <Switch
                name="isAdmin"
                checkedIcon={<i className="material-icons">verified_user</i>}
                checked={isAdmin}
                onChange={this.onSubmit}
                style={{ margin: '0px', padding: '0px' }}
                disabled={uid === firebase.userUid()}
              />
)}
            label={isAdmin ? 'Admin' : 'Not Admin'}
          />
        </FormGroup>
      </Fragment>
    );
  }
}

MakeAdmin.propTypes = {
  firebase: PropTypes.shape({}).isRequired,
  uid: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default withFirebase(MakeAdmin);
