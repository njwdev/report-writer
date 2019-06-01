import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import landingStyles from './styles/LandingStyles';

const Landing = props => {
  const { classes } = props;

  return (
    <main className={classes.layout}>
      <div className={classes.landingContent}>
        <Typography variant="h2" align="center" gutterBottom>
          Report Writer
        </Typography>
        <Typography variant="h6" align="center">
          Write your reports more quickly and efficiently
        </Typography>
      </div>

      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardActions>
              <Button fullWidth variant="contained" color="secondary" href="/signup">
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
};

Landing.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(landingStyles)(Landing);
