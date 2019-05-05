import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    margin: '5px auto',
  },
  success: {
    color: '#28B463',
    fontWeight: 'bold',
  },
  warning: {
    color: '#E74C3C',
    fontWeight: 'bold',
  },
});

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
