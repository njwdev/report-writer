import React from 'react';
import { withAuthorization } from '../../Session';
import CommentsAdmin from './CommentsAdmin';

import PageContainer from '../../layout/Container/PageContainer';
import PageHeader from '../../layout/Container/PageHeader';
import * as ROLES from '../../../constants/roles';

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

const Comments = () => {
  return (
    <PageContainer>
      <PageHeader title="Comments" link="/admin" />
      <CommentsAdmin />
    </PageContainer>
  );
};

export default withAuthorization(condition)(Comments);
