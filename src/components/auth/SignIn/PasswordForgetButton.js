import React from 'react';
import Button from '@material-ui/core/Button';

const forgetStyle = {
  marginTop: '5%',
};

const PasswordForgetButton = () => {
  return (
    <div style={forgetStyle}>
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
