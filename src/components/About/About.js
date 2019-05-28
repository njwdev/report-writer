import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';

const About = () => (
  <PageContainer>
    <PageHeader title="About" link="/about" />
    <div>
      <h1>Welcome to the about page</h1>
      <p>Always render user guide, render admin guide only if admin</p>
      <p> Contact form and version</p>
      <List>
        <ListItem>
          <a href="mailto:someone@example.com" target="_top">
            Send Mail
          </a>
        </ListItem>
      </List>
    </div>
  </PageContainer>
);

export default About;
