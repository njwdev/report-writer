import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteButton from '../../../ui/Buttons/DeleteButton';

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

export default ModalButtons;
