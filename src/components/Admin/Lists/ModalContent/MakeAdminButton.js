import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MakeAdmin from '../../Users/MakeAdminForm/MakeAdmin';

const MakeAdminButton = props => {
  const { isAdmin, id } = props;
  return (
    <DialogContent>
      <DialogContentText>
        <strong>Admin Status:</strong>
      </DialogContentText>

      <MakeAdmin isAdmin={isAdmin === 'ADMIN' ? true : false} uid={id} />
    </DialogContent>
  );
};

export default MakeAdminButton;
