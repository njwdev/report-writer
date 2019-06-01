import React from 'react';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import AboutPanels from './AboutPanels/AboutPanels';
import AboutFooter from './AboutFooter/AboutFooter';

const About = () => (
  <PageContainer>
    <PageHeader title="About" link="/home" />
    <AboutPanels />
    <AboutFooter />
  </PageContainer>
);

export default About;
