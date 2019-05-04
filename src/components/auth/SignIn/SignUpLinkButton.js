import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
  marginTop: '5%',
};

const SignUpLinkButton = () => {
  return (
    <div style={style}>
      <Button color="secondary" variant="outlined" href="/signup" size="small">
        Don't have an account? Sign up here
      </Button>
    </div>
  );
};

export default SignUpLinkButton;
