import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const PaperContainer = props => {
  const { children } = props;
  return <Paper style={{ padding: '5px', margin: '5px 0px' }}>{children}</Paper>;
};

PaperContainer.propTypes = { children: PropTypes.node.isRequired };

export default PaperContainer;
