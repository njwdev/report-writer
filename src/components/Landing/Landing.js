import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import landingStyles from './styles';

const Landing = props => {
  const { classes } = props;

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

Landing.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(landingStyles)(Landing);
