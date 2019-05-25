import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../../../firebase';

const LogoutButton = ({ firebase }) => (
  <Button color="secondary" variant="contained" onClick={firebase.logoutHandler}>
    <i style={{ marginRight: '20%' }} className="material-icons">
      power_settings_new
    </i>{' '}
    Logout
  </Button>
);

LogoutButton.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(LogoutButton);
