import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// MUI
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
// Internal
import { withFirebase } from '../../firebase';

const NavDrawerLogout = ({ firebase }) => (
  <Fragment>
    <ListItem button onClick={firebase.logoutHandler}>
      <ListItemIcon>
        <Icon>exit_to_app</Icon>
      </ListItemIcon>
      <ListItemText primary='Logout' />
    </ListItem>
    <Divider />
  </Fragment>
);

NavDrawerLogout.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(NavDrawerLogout);
