import React from 'react';
import { withAuthorization } from '../Session';

const condition = authUser => !!authUser;

const Home = () => {
  return (
    <div>
      Home
      <div>
        main page where users create the report. Should be a series of dropdowns
        with a selection of comments, name and pronoun inputs, a place to view
        the final reports anad a copy button
      </div>
    </div>
  );
};

export default withAuthorization(condition)(Home);
