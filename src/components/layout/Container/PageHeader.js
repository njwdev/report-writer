import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { BackButton } from '../../ui/Buttons';

const PageHeader = props => {
  const { title, link } = props;
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      {title ? <h2>{title}</h2> : null}
      {link ? <BackButton link={link} /> : null}
    </Grid>
  );
};

PageHeader.defaultProps = { link: undefined, title: undefined };

PageHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default PageHeader;
