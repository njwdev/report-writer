import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SubmitButtonStyles from './SubmitButtonStyles';

const submitButton = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={props.disabled}
      >
        {props.children}
      </Button>
    </React.Fragment>
  );
};

export default withStyles(SubmitButtonStyles)(submitButton);
