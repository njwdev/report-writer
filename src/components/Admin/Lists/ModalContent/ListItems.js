import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ListItems = props => {
  const { listItems } = props;
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

export default ListItems;
