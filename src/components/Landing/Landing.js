import React from 'react';
// MUI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Styles
const styles = theme => ({
  layout: {
    width: 'auto',
    margin: '0 10%'
  },
  content: {
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

const Landing = ({ classes }) => {
  return (
    <main className={classes.layout}>
      <div className={classes.content}>
        <Typography variant='h2' align='center' gutterBottom>
          Report Writer
        </Typography>
        <Typography
          variant='h6'
          align='center'
          style={{ fontFamily: 'McLaren' }}
        >
          Write your reports more quickly and efficiently
        </Typography>
      </div>

      <Grid container justify='center'>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Button
            fullWidth
            variant='contained'
            color='secondary'
            href='/signup'
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default withStyles(styles)(Landing);
