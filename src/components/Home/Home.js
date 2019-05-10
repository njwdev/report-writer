import React from 'react';
import { withAuthorization } from '../Session';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';

const condition = authUser => !!authUser;

const Home = () => {
  return (
    <PageContainer>
      <PageHeader title="Home" />
      <div>
        main page where users create the report. Should be a series of dropdowns
        with a selection of comments, name and pronoun inputs, a place to view
        the final reports anad a copy button
      </div>
    </PageContainer>
  );
};

export default withAuthorization(condition)(Home);
