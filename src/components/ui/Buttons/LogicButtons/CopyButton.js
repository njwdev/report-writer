import React from 'react';
// import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const CopyButton = () => (
  <Fab size="small" color="secondary" aria-label="Add">
    <Icon>file_copy</Icon>
  </Fab>
);

CopyButton.propTypes = {};
export default CopyButton;
