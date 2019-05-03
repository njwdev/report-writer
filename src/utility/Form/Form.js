import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormStyles from './FormStyles';

const form = props => {
  const { classes } = props;

  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      {props.children}
    </form>
  );
};

export default withStyles(FormStyles)(form);
