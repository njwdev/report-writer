import React from 'react';
import { withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import Form from './Form/Form';
import Comments from './Comments/Comments';
import TextBox from './TextBox';

const condition = authUser => !!authUser;

const Home = () => (
  <PageContainer>
    <PageHeader title="Home" />
    <div>
      <Form />
      <Comments />
      <TextBox />
    </div>
  </PageContainer>
);

export default withAuthorization(condition)(Home);
