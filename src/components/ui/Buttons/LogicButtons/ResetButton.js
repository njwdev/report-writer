import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const ResetButton = props => {
  const { onClick } = props;
  return (
    <div style={{ margin: '3px auto', textAlign: 'center' }}>
      <IconButton onClick={onClick} size="small" type="reset" color="primary" aria-label="Add">
        <Icon>autorenew</Icon>
      </IconButton>
    </div>
  );
};

ResetButton.propTypes = { onClick: PropTypes.func.isRequired };
export default ResetButton;
