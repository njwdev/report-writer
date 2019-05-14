import React from 'react';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../../../firebase';

const SignOutButton = ({ firebase }) => (
  <Button
    color="secondary"
    variant="contained"
    onClick={firebase.signOutHandler}
  >
    <i className="material-icons">power_settings_new</i>
  </Button>
);

export default withFirebase(SignOutButton);
