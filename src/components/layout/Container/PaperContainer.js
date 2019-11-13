import React from 'react';
import PropTypes from 'prop-types';
// MUI
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// Styles
const styles = theme => ({
  paper: {
    padding: '5px',
    margin: '5px 0px',
    background: '#f3f3f3',
    border: `${theme.palette.primary.dark} 3px solid`
  }
});

const PaperContainer = ({ children, classes }) => {
  return <Paper className={classes.paper}>{children}</Paper>;
};

PaperContainer.propTypes = { children: PropTypes.node.isRequired };

export default withStyles(styles)(PaperContainer);
