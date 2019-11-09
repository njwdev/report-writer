import React from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ListItems = ({ listItems }) => {
  return (
    <DialogContent>
      {listItems.map(item => (
        <DialogContentText key={Math.random()}>
          <strong>{item.title} </strong>
          {item.text}
        </DialogContentText>
      ))}
    </DialogContent>
  );
};

ListItems.propTypes = { listItems: PropTypes.instanceOf(Array).isRequired };

export default ListItems;
