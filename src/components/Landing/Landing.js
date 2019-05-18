import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import landingStyles from './styles/LandingStyles';

const Landing = props => {
  const { classes } = props;

  const tiers = [
    {
      title: 'Write your reports',
      subheader: 'Enter the website',
      price: 'Free trial',
      description: ['100+ samples to choose from', 'Quick and easy', 'Admin support'],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
  ];

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
          {tiers.map(tier => (
            <Grid item key={tier.title} xs={12} sm={12} md={12} lg={12}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" />
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={tier.buttonVariant} color="secondary" href="/signup">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </Fragment>
  );
};

Landing.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(landingStyles)(Landing);
