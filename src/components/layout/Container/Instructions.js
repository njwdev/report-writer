import React from 'react';
// MUI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// Styles
const styles = theme => ({
  avatar: {
    background: 'transparent',
    margin: 'auto',
    color: theme.palette.primary.dark
  },
  // icon: { color: theme.palette.secondary.main },
  grid: {
    textAlign: 'center',
    margin: '10px auto'
  }
});

const Instructions = ({ classes, data }) => {
  return (
    <Grid container direction='row' alignContent='center' justify='center'>
      {data.map((item, i) => (
        <Grid key={i} item xs={4} className={classes.grid}>
          <Avatar className={classes.avatar}>
            <Icon>{item.icon}</Icon>
          </Avatar>
          <Typography
            className={classes.icon}
            variant='caption'
            color='primary'
          >
            {item.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(Instructions);
