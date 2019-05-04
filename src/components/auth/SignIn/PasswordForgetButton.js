import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
  marginTop: '5%',
};

const PasswordForgetButton = () => {
  return (
    <div style={style}>
      <Button
        color="secondary"
        variant="outlined"
        href="/password_forget"
        size="small"
      >
        Forgotten your password?
      </Button>
    </div>
  );
};

export default PasswordForgetButton;
