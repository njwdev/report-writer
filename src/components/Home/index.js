import React from 'react';
import { withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import Form from './Form/Form';

const condition = authUser => !!authUser;

const Home = () => (
  <PageContainer>
    <div>
      <Form />
    </div>
  </PageContainer>
);

export default withAuthorization(condition)(Home);
