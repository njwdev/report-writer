import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
  marginTop: '5%',
};

const SignInLinkButton = () => {
  return (
    <div style={style}>
      <Button color="secondary" variant="outlined" href="/signin" size="small">
        Already have an account? Sign in here
      </Button>
    </div>
  );
};

export default SignInLinkButton;
