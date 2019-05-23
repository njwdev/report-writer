import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const CopyButton = props => {
  const { value, onCopy } = props;
  return (
    <CopyToClipboard text={value} onCopy={onCopy}>
      <Fab size="small" color="secondary" aria-label="Add">
        <Icon>file_copy</Icon>
      </Fab>
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
  value: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};
export default CopyButton;
