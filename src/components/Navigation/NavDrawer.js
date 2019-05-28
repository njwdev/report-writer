import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import NavDrawerLogout from '../ui/Buttons/LogicButtons/NavDrawerLogout';
import { AuthUserContext } from '../Session/index';
import { withFirebase } from '../../firebase';
import * as ROLES from '../../constants/roles';

const data = (text, icon, link) => ({ text, icon, link });

const navDrawerButtonsUser = [
  data('Home', 'home', 'home'),
  data('Account', 'settings', 'account'),
  data('About', 'help', 'about'),
];

const navDrawerButtonsAdmin = [data('Admin', 'verified_user', 'admin')];

const navDrawerNonAuth = [data('Login', 'lock_open', 'login'), data('About', 'help', 'about')];

let navDrawerToRender = null;

const styles = {
  list: { width: 250 },
  fullList: { width: 'auto' },
};

class NavDrawer extends Component {
  state = { open: false };

  toggleDrawer = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <AuthUserContext.Consumer>
          {authUser => {
            if (!authUser) {
              navDrawerToRender = navDrawerNonAuth;
            } else if (authUser && !!authUser.roles[ROLES.ADMIN]) {
              navDrawerToRender = navDrawerButtonsUser.concat(navDrawerButtonsAdmin);
            } else {
              navDrawerToRender = navDrawerButtonsUser;
            }
            return (
              <Fragment>
                <List>
                  {navDrawerToRender.map(item => (
                    <ListItem button key={item.text} component="a" href={`/${item.link}`}>
                      <ListItemIcon>
                        <i className="material-icons">{item.icon} </i>
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

    return (
      <div>
        <IconButton style={{ color: '#ffffff' }} onClick={this.toggleDrawer}>
          <Icon className="iconButton">menu</Icon>
        </IconButton>

        <Drawer anchor="right" open={open} onClose={this.toggleDrawer}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  firebase: PropTypes.shape({}).isRequired,
};

export default withFirebase(withStyles(styles)(NavDrawer));
