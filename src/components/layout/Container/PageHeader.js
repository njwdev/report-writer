import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { BackButton } from '../../ui/Buttons';

const PageHeader = props => {
  const { title, link, pageDescription } = props;
  return (
    <Fragment>
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
      <Typography variant='caption' style={{ marginBottom: '5px' }}>
        {pageDescription}
      </Typography>
    </Fragment>
  );
};

PageHeader.defaultProps = {
  link: undefined,
  title: undefined,
  pageDescription: undefined
};

PageHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  pageDescription: PropTypes.string
};

export default PageHeader;
