import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import landingStyles from './styles/LandingStyles';

const Landing = props => {
  const { classes } = props;

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Reports Writer
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            Write your reports more quickly and efficiently.
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card>
              <CardActions className={classes.cardActions}>
                <Button fullWidth variant="contained" color="secondary" href="/signup">
                  Get Started
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </main>
    </Fragment>
  );
};

Landing.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(landingStyles)(Landing);
