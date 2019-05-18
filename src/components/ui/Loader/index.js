import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => (
  <div style={{ margin: '10px auto', textAlign: 'center' }}>
    <CircularProgress color="secondary" />
  </div>
);

export default Loader;
