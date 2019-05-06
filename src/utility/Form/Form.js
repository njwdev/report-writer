import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormStyles from './FormStyles';

const Form = props => {
  const { classes, children, onSubmit } = props;

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  );
};

export default withStyles(FormStyles)(Form);
