import React from 'react';
import PropTypes from 'prop-types';
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

      <MakeAdmin isAdmin={isAdmin === 'ADMIN'} uid={id} />
    </DialogContent>
  );
};

MakeAdminButton.defaultProps = { isAdmin: undefined };

MakeAdminButton.propTypes = {
  isAdmin: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default MakeAdminButton;
