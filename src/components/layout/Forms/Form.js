import React from 'react';
import PropTypes from 'prop-types';
// MUI
import { withStyles } from '@material-ui/core/styles';
// Styles
const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: { marginTop: theme.spacing.unit * 3 }
});

const Form = ({ classes, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(Form);
