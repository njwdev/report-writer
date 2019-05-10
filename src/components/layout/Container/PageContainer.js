import React from 'react';
import Grid from '@material-ui/core/Grid';

const PageContainer = props => {
  const { children } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ padding: '10px' }}
    >
      <Grid item xs={12} md={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageContainer;
