import React from 'react';
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

export default LinkButton;
