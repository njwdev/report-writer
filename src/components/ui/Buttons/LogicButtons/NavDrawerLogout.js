import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { withFirebase } from '../../../../firebase';

const data = (text, icon, link) => ({ text, icon, link });

const navDrawerLogout = [data('Logout', 'power_settings_new', null)];

const NavDrawerLogout = ({ firebase }) => navDrawerLogout.map(item => (
  <Fragment key={item.text}>
    <ListItem button key={item.text} onClick={firebase.logoutHandler}>
      <ListItemIcon>
        <i className="material-icons">{item.icon} </i>
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
    <Divider />
  </Fragment>
));

NavDrawerLogout.propTypes = { firebase: PropTypes.shape({}) };

export default withFirebase(NavDrawerLogout);
