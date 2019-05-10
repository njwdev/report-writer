import React from 'react';
import Grid from '@material-ui/core/Grid';
import BackButton from '../../ui/Buttons/BackButton';

const PageHeader = props => {
  const { title, link } = props;
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      {title ? <h2>{title}</h2> : null}
      {link ? <BackButton link={link} /> : null}
    </Grid>
  );
};

export default PageHeader;
