import React from 'react';
// MUI
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
// Style
const styles = theme => ({
  container: {
    textAlign: 'center'
  },
  divider: {
    marginTop: '15px'
  },
  icon: {
    fontSize: '12px'
  }
});

const AboutFooter = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Divider className={classes.divider} />
      <Typography>Report Writer</Typography>
      <Typography variant='caption'>
        nwjwdev@gmail.com <Icon className={classes.icon}>copyright</Icon>
        2019
      </Typography>
      <Typography variant='caption'>Version: 1.3.0</Typography>
    </div>
  );
};

export default withStyles(styles)(AboutFooter);
