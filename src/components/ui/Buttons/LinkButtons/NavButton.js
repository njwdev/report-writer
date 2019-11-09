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
      variant='contained'
      color={color || 'primary'}
      style={{ margin: '0px 2px' }}
    >
      <Icon style={{ marginRight: '5px' }}>{icon}</Icon>
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
