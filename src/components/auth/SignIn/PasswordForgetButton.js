import React from 'react';
import Button from '@material-ui/core/Button';
const PasswordForgetButton = () => {
  return (
    <div>
      <Button color="secondary" variant="contained" href="/password_forget">
        Forgotten your password?
      </Button>
    </div>
  );
};

export default PasswordForgetButton;
