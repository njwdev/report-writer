import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AuthPageStyles from './AuthPageStyles';

const authPage = props => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <i class="material-icons">{props.icon}</i>
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.title}
        </Typography>
        {props.children}
      </Paper>
    </main>
  );
};

export default withStyles(AuthPageStyles)(authPage);
