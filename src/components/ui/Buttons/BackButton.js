import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const BackButton = props => {
  const { link } = props;
  return (
    <div>
      <IconButton>
        <i className="material-icons">arrow_back</i>
      </IconButton>
    </div>
  );
};

export default BackButton < IconButton;
