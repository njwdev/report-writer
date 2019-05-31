import React from 'react';
import { withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import Form from './Form';
import PageHeader from '../layout/Container/PageHeader';

const condition = authUser => !!authUser;
const desc = "Add your student's name, the pronoun you wish to use, and the term you are writing the report for. Create your report from the generated comments. Hit the copy button. You're all set!";
const Home = () => (
  <PageContainer>
    <PageHeader title="Write your report" pageDescription={desc} />
    <div>
      <Form />
    </div>
  </PageContainer>
);

export default withAuthorization(condition)(Home);
