import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const Message = props => {
  const { classes, children, type } = props;
  return (
    <Paper className={classes.root}>
      <Typography
        className={type === 'success' ? classes.success : classes.warning}
      >
        {children}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Message);
