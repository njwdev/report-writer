import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import NavigationStyles from './NavigationStyles';
import NavButtons from './NavButtons';

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
        <NavButtons />

        <Button color="secondary" variant="contained" href="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(NavigationStyles)(Navigation);
