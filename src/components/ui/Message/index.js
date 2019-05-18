import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const Message = props => {
  const { classes, children, type } = props;
  return (
    <Paper className={classes.root}>
      <Typography className={type === 'success' ? classes.success : classes.warning}>
        {children}
      </Typography>
    </Paper>
  );
};

Message.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(Message);
