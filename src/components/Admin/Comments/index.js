import React from 'react';
import { withAuthorization } from '../../Session';
import CommentsAdmin from './CommentsAdmin';

import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';
import * as ROLES from '../../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];
const desc = 'A list of all the comments currently on the database. Select a comment to view, edit or delete it.';
const Comments = () => (
  <PageContainer>
    <PageHeader title="Comments" link="/admin" pageDescription={desc} />
    <CommentsAdmin />
  </PageContainer>
);

export default withAuthorization(condition)(Comments);
