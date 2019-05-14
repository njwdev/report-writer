import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import NavigationStyles from './styles/NavigationStyles';
import NavButtons from './NavButtons';
import NavDrawer from './NavDrawer';
import PropTypes from 'prop-types';

const Navigation = props => {
  const { classes } = props;
  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <a className={classes.siteTitle} href="/">
            Report Writer
          </a>
        </Typography>
        <Hidden smDown>
          <NavButtons />
        </Hidden>
        <Hidden mdUp>
          <NavDrawer />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(NavigationStyles)(Navigation);
