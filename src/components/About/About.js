import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PageContainer from '../layout/Container/PageContainer';
import PageHeader from '../layout/Container/PageHeader';
import { withFirebase } from '../../firebase';
import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';

const About = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <PageContainer>
        <PageHeader title="About" link="/about" />
        <div>
          <h2>Welcome to Report Writer - A web app to speed up your report writing</h2>
          <p>User guide here</p>
          <p> Contact form and version</p>
          <List>
            <ListItem>
              {/* <a href="mailto:someone@example.com" target="_top"> */}
              Send Mail
              {/* </a> */}
            </ListItem>
          </List>
        </div>
        {authUser && !!authUser.roles[ROLES.ADMIN] ? (
          <Fragment>
            <p> Admin info here</p>
          </Fragment>
        ) : null}
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

export default withFirebase(About);
