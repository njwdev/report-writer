import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import ListItems from './ListItems';
import MakeAdminButton from './MakeAdminButton';
import ModalButtons from './ModalButtons';

const ModalContent = props => {
  const { open, onOpen, onClose, listItems, type, primary, isAdmin, id, onDelete } = props;
  return (
    <div>
      <IconButton aria-label="Open" onClick={onOpen}>
        <Icon>add</Icon>
      </IconButton>

      <Dialog open={open} onClose={onClose} aria-labelledby="modal-title" fullWidth>
        <DialogTitle id="modal-title">{primary}</DialogTitle>
        <ListItems listItems={listItems} />
        <Divider />
        {type === 'User' ? <MakeAdminButton isAdmin={isAdmin} id={id} /> : null}

        <ModalButtons onDelete={onDelete || null} id={id} close={onClose} />
      </Dialog>
    </div>
  );
};

ModalContent.defaultProps = { onDelete: null, isAdmin: undefined };

ModalContent.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  listItems: PropTypes.instanceOf(Array).isRequired,
  type: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  isAdmin: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default ModalContent;
