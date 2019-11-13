import React from 'react';
import PropTypes from 'prop-types';
// MUI
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// Styles
import AuthPageStyles from './styles/AuthPageStyles';

const AuthPage = ({ classes, icon, title, children }) => {
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <i className='material-icons'>{icon}</i>
        </Avatar>
        <Typography component='h1' variant='h5' className={classes.typography}>
          {title}
        </Typography>
        {children}
      </Paper>
    </main>
  );
};

AuthPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(AuthPageStyles)(AuthPage);
