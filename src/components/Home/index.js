import React from 'react';
import { withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import Form from './Form';
import Instructions from './Form/Instructions';

const condition = authUser => !!authUser;

const Home = () => (
  <PageContainer>
    <PageHeader title='Write your report' />
    <Instructions />
    <Form />
  </PageContainer>
);

export default withAuthorization(condition)(Home);
