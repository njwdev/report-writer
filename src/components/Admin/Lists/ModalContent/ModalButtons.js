import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { DeleteButton } from '../../../ui/Buttons';

const ModalButtons = props => {
  const { onDelete, close, id } = props;
  return (
    <div>
      <DialogActions style={{}}>
        {onDelete ? <DeleteButton onDelete={onDelete} id={id} /> : null}
        <Button onClick={close} color="primary">
          Back
        </Button>
      </DialogActions>
    </div>
  );
};

ModalButtons.defaultProps = { onDelete: null };

ModalButtons.propTypes = {
  onDelete: PropTypes.func,
  close: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ModalButtons;
