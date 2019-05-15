import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import ListItems from './ListItems';
import MakeAdminButton from './MakeAdminButton';
import ModalButtons from './ModalButtons';

const ModalContent = props => {
  const {
    open,
    onOpen,
    onClose,
    listItems,
    type,
    primary,
    isAdmin,
    id,
    onDelete,
  } = props;
  return (
    <div>
      <IconButton aria-label="Open" onClick={onOpen}>
        <Icon>add</Icon>
      </IconButton>

      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        fullWidth
      >
        <DialogTitle id="modal-title">{primary}</DialogTitle>
        <ListItems listItems={listItems} />
        <Divider />
        {type === 'User' ? <MakeAdminButton isAdmin={isAdmin} id={id} /> : null}

        <ModalButtons onDelete={onDelete || null} id={id} close={onClose} />
      </Dialog>
    </div>
  );
};

export default ModalContent;
