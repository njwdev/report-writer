import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const LinkButton = props => {
  const { children, link, color, variant, size, fullWidth } = props;
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

LinkButton.defaultProps = {
  color: undefined,
  variant: undefined,
  size: undefined,
  fullWidth: undefined,
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
};
export default LinkButton;
