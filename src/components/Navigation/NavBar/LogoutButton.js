import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
// Internal
import { withFirebase } from '../../../firebase';

const LogoutButton = ({ firebase }) => (
  <IconButton
    color='primary'
    variant='contained'
    onClick={firebase.logoutHandler}
  >
    <Icon>exit_to_app</Icon>
  </IconButton>
);

LogoutButton.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(LogoutButton);
