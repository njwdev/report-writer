import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const BackButton = props => {
  const { link } = props;
  return (
    <IconButton component={Link} to={link}>
      <Icon>arrow_back</Icon>
    </IconButton>
  );
};

export default BackButton;
