import React from 'react';
import PropTypes from 'prop-types';
// MUI
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Style
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    margin: '5px auto'
  },
  success: {
    color: '#28B463',
    fontWeight: 'bold'
  },
  warning: {
    color: theme.palette.error.main,
    fontWeight: 'bold'
  }
});

const Message = ({ classes, children, type }) => {
  return (
    <Paper className={classes.root}>
      <Typography
        // Set to div to avoid nesting in <p></p> tag console errors
        component='div'
        className={type === 'success' ? classes.success : classes.warning}
      >
        {children}
      </Typography>
    </Paper>
  );
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

export default withStyles(styles)(Message);
