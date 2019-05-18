import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormStyles from './styles/FormStyles';

const Form = props => {
  const { classes, children, onSubmit } = props;

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  );
};

Form.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(FormStyles)(Form);
