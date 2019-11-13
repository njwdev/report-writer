import React, { Component } from 'react';
// MUI
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
// Internal
import SideList from './SideList';

class NavDrawer extends Component {
  state = { open: false };

  toggleDrawer = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <IconButton color='inherit' onClick={this.toggleDrawer}>
          <Icon>menu</Icon>
        </IconButton>

        <Drawer anchor='right' open={open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <SideList />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
