import React from 'react';
import { Grid, Icon, Typography, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

const Instructions = props => {
  const { classes } = props;
  const data = [
    {
      icon: 'face',
      text: "Add student's name & pronoun"
    },
    {
      icon: 'chat',
      text: 'Build your report'
    },
    {
      icon: 'file_copy',
      text: 'Hit copy!'
    }
  ];
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
