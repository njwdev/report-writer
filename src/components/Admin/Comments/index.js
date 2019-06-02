import React from 'react';
import { withAuthorization } from '../../Session';
import CommentsAdmin from './CommentsAdmin';

import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';
import * as ROLES from '../../../constants/roles';
import { commentsDesc } from '../../ui/PageDescriptions';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

const Comments = () => (
  <PageContainer>
    <PageHeader title="Comments" link="/admin" pageDescription={commentsDesc} />
    <CommentsAdmin />
  </PageContainer>
);

export default withAuthorization(condition)(Comments);
