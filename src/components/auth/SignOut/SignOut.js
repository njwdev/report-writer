import React from 'react';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../../../firebase';

const SignOutButton = ({ firebase }) => (
  <Button
    color="secondary"
    variant="contained"
    onClick={firebase.signOutHandler}
  >
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
