import React, { Component } from 'react';
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

const data = (text, icon, link) => {
  return { text, icon, link };
};

const navDrawerButtonsUser = [
  data('Home', 'home', 'home'),
  data('Account', 'settings', 'account'),
];

const navDrawerButtonsAdmin = [data('Admin', 'verified_user', 'admin')];

const navDrawerSignOut = [data('Sign Out', 'power_settings_new', null)];

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavDrawer extends Component {
  state = {
    open: false,
  };

  toggleDrawer = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {navDrawerButtonsUser.map(item => (
            <ListItem
              button
              key={item.text}
              component="a"
              href={`/${item.link}`}
            >
              <ListItemIcon>
                <i className="material-icons">{item.icon} </i>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {navDrawerButtonsAdmin.map(item => (
            <ListItem
              button
              key={item.text}
              component="a"
              href={`/${item.link}`}
            >
              <ListItemIcon>
                <i className="material-icons">{item.icon} </i>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {navDrawerSignOut.map(item => (
            <ListItem button key={item.text}>
              <ListItemIcon>
                <i className="material-icons">{item.icon} </i>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton style={{ color: '#fff' }} onClick={this.toggleDrawer}>
          <Icon color="default">menu</Icon>
        </IconButton>

        <Drawer anchor="right" open={open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);
