import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const NavButton = props => {
  const { link, icon, text } = props;
  return (
    <Button component={NavLink} to={`/${link}`} variant="contained" color="primary">
      <i className="material-icons" style={{ marginRight: '20%' }}>
        {icon}
      </i>
      {text}
    </Button>
  );
};

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavButton;
