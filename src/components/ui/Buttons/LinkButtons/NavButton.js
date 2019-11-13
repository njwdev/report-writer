import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// MUI
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const NavButton = ({ link, icon, text, color }) => {
  return (
    <Button
      component={NavLink}
      to={`/${link}`}
      variant='outlined'
      color={color || 'inherit'}
      style={{ margin: '0px 1px' }}
    >
      <Icon>{icon}</Icon>
      {text}
    </Button>
  );
};

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavButton;
