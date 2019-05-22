import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withFirebase } from '../../../../firebase';

const SignOutButton = ({ firebase }) => (
  <Button
    color="secondary"
    variant="contained"
    onClick={firebase.signOutHandler}
    style={{ margin: '0px 2px' }}
  >
    <Icon style={{ marginRight: '5px' }}>power_settings_new</Icon>
    Logout
  </Button>
);

SignOutButton.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(SignOutButton);
