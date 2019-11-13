import React from 'react';
// MUI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
// Internal
import NavButtons from './NavBar/NavButtons';
import NavDrawer from './NavDrawer/NavDrawer';
// Styles
const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.background.contrastText
  },
  toolbarTitle: {
    flex: 1
  },
  siteTitle: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

const Navigation = ({ classes }) => {
  return (
    <AppBar position='static' color='primary' className={classes.appBar}>
      <Toolbar>
        <Typography
          variant='h6'
          color='inherit'
          noWrap
          className={classes.toolbarTitle}
        >
          <a className={classes.siteTitle} href='/'>
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

export default withStyles(styles)(Navigation);
