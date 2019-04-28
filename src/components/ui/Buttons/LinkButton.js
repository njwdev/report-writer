import React from 'react';
import Button from '@material-ui/core/Button';

const LinkButton = props => {
  const { text, link } = props;
  return (
    <Button color="primary" variant="contained" href={`/${link}`}>
      {text}
    </Button>
  );
};

export default LinkButton;
