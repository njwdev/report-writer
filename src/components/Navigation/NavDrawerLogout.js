import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { withFirebase } from '../../firebase';

const NavDrawerLogout = ({ firebase }) => (
  <Fragment>
    <ListItem button onClick={firebase.logoutHandler}>
      <ListItemIcon>
        <i className="material-icons">power_settings_new</i>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    <Divider />
  </Fragment>
);

NavDrawerLogout.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(NavDrawerLogout);
