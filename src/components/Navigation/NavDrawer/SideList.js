import React, { Fragment } from 'react';
// MUI
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
// Internal
import { AuthUserContext } from '../../Session/index';
import { withFirebase } from '../../../firebase';
import * as ROLES from '../../../constants/roles';
import {
  navDrawerButtonsUser,
  navDrawerButtonsAdmin,
  navDrawerNonAuth
} from '../data';
import NavDrawerLogout from './NavDrawerLogout';

let navDrawerToRender = null;

const styles = () => ({
  list: { width: 250 },
  fullList: { width: 'auto' }
});

const SideList = ({ classes }) => {
  return (
    <div className={classes.list}>
      <AuthUserContext.Consumer>
        {authUser => {
          if (!authUser) {
            navDrawerToRender = navDrawerNonAuth;
          } else if (authUser && !!authUser.roles[ROLES.ADMIN]) {
            navDrawerToRender = navDrawerButtonsUser.concat(
              navDrawerButtonsAdmin
            );
          } else {
            navDrawerToRender = navDrawerButtonsUser;
          }
          return (
            <Fragment>
              <List>
                {navDrawerToRender.map(item => (
                  <ListItem
                    button
                    key={item.text}
                    component='a'
                    href={`/${item.link}`}
                  >
                    <ListItemIcon>
                      <Icon>{item.icon} </Icon>
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
                <Divider />
                {authUser ? <NavDrawerLogout /> : null}
              </List>
            </Fragment>
          );
        }}
      </AuthUserContext.Consumer>
    </div>
  );
};

export default withFirebase(withStyles(styles)(SideList));
