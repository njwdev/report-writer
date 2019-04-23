import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignOut from '../auth/SignOut/SignOut';
import { withStyles } from '@material-ui/core/styles';
import navigationStyles from './NavigationStyles';

const LandingTest = props => {
  const { classes } = props;

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <a className={classes.siteTitle} href="/">
              Reports Writer
            </a>
          </Typography>
          <Button color="primary" variant="contained" href="/home">
            Home
          </Button>
          <Button color="primary" variant="contained" href="/about">
            About
          </Button>
          <Button color="primary" variant="contained" href="/signin">
            Sign In
          </Button>
          <Button color="secondary" variant="contained" href="/signin">
            Admin
          </Button>
          <SignOut />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

LandingTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(navigationStyles)(LandingTest);
