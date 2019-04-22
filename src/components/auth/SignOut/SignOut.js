import React from 'react';

import { withFirebase } from '../../../firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.signOutHandler}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
