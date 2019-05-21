import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../../../firebase';

const SignOutButton = ({ firebase }) => (
  <Button color="secondary" variant="contained" onClick={firebase.signOutHandler}>
    <i style={{ marginRight: '20%' }} className="material-icons">
      power_settings_new
    </i>
    Logout
  </Button>
);

SignOutButton.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(SignOutButton);
