import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
// Internal
import { BackButton } from '../../ui/Buttons';

const PageHeader = ({ title, link }) => {
  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      style={{ marginTop: '10px' }}
    >
      {title ? <Typography variant='h5'>{title}</Typography> : null}
      {link ? <BackButton link={link} /> : null}
    </Grid>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};

export default PageHeader;
