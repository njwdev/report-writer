import React, { Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';

import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import AboutPanels from './AboutPanels/AboutPanels';

const About = () => (
  <PageContainer>
    <PageHeader title="About" link="/about" />
    <Fragment>
      <Typography gutterBottom variant="h6">
        FAQs
      </Typography>
      <AboutPanels />
    </Fragment>
    <Divider style={{ marginTop: '5%' }} />

    <Typography>Report Writer</Typography>
    <Typography>Version: x</Typography>
  </PageContainer>
);

export default About;
