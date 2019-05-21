import React from 'react';
import { withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import Form from './Form/Form';
import Comments from './Comments/Comments';

const condition = authUser => !!authUser;

const Home = () => (
  <PageContainer>
    <div>
      <Form />
      <Comments />
    </div>
  </PageContainer>
);

export default withAuthorization(condition)(Home);
