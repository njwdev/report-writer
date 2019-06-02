import React from 'react';
import { withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import Form from './Form';
import { homeDesc } from '../ui/PageDescriptions';

const condition = authUser => !!authUser;

const Home = () => (
  <PageContainer>
    <PageHeader title="Write your report" pageDescription={homeDesc} />
    <Form />
  </PageContainer>
);

export default withAuthorization(condition)(Home);
