import React from 'react';
// MUI
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';

const Title = ({ title, onShuffle, searchValue, onSearchChange }) => {
  return (
    <DialogTitle id='comment-title'>
      {title}
      <Button
        onClick={onShuffle}
        variant='outlined'
        color='primary'
        style={{ float: 'right' }}
      >
        Random
      </Button>
      <div>
        <Input
          placeholder='includes...'
          autoFocus={false}
          id='includes'
          name='includes'
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
    </DialogTitle>
  );
};

export default Title;
