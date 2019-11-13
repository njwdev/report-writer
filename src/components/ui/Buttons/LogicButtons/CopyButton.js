import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// MUI
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const CopyButton = ({ value, onCopy, copied }) => {
  let backgroundColor = null;
  if (copied) {
    backgroundColor = '#28B463';
  }
  return (
    <CopyToClipboard text={value} onCopy={onCopy}>
      <Fab
        size='small'
        color='secondary'
        style={{ backgroundColor }}
        aria-label='Add'
        disabled={value === ''}
      >
        <Icon>file_copy</Icon>
      </Fab>
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
  value: PropTypes.string,
  onCopy: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired
};
export default CopyButton;
