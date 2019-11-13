import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// MUI
import Button from '@material-ui/core/Button';

const LinkButton = ({ children, link, color, variant, size, fullWidth }) => {
  return (
    <Button
      component={Link}
      to={`/${link}`}
      style={{ margin: '5px auto' }}
      color={color || 'primary'}
      variant={variant || 'contained'}
      size={size || 'medium'}
      fullWidth={fullWidth || true}
    >
      {children}
    </Button>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool
};
export default LinkButton;
