import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const LinkButton = props => {
  const { text, link } = props;
  return (
    <Button
      component={Link}
      to={`/${link}`}
      color="primary"
      variant="contained"
    >
      {text}
    </Button>
  );
};

export default LinkButton;
