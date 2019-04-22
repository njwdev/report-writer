import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.contrastText,
  },
  toolbarTitle: {
    flex: 1,
  },
  button: {
    color: theme.palette.background.contrastText,
  },
});

const LandingTest = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <a href="/">Reports Writer</a>
          </Typography>
          <Button color="primary" variant="contained">
            <a href="/home">Home</a>
          </Button>
          <Button color="primary" variant="contained">
            <a href="/about">About</a>
          </Button>
          <Button color="primary" variant="contained">
            <a href="/">Support</a>
          </Button>
          <Button color="secondary" variant="contained">
            <a href="/signin">Admin</a>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

LandingTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingTest);
