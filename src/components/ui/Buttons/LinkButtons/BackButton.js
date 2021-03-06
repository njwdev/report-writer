import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// MUI
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const BackButton = ({ link }) => {
  return (
    <IconButton component={Link} to={link}>
      <Icon>arrow_back</Icon>
    </IconButton>
  );
};

BackButton.propTypes = { link: PropTypes.string.isRequired };

export default BackButton;
