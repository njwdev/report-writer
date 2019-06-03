import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

const AboutFooter = () => (
  <div style={{ textAlign: 'center' }}>
    <Divider style={{ marginTop: '15px' }} />
    <Typography>Report Writer</Typography>
    <Typography variant="caption">
      nwjwdev@gmail.com <Icon style={{ fontSize: '12px' }}>copyright</Icon>2019
    </Typography>
    <Typography variant="caption">Version: 1.0.2</Typography>
  </div>
);

export default AboutFooter;
