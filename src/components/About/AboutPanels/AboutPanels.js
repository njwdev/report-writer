import React, { Fragment } from 'react';
// MUI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
// Internal
import { aboutFAQsUser, aboutFAQsAdmin } from '../data';
import { withFirebase } from '../../../firebase';
import { AuthUserContext } from '../../Session';
import * as ROLES from '../../../constants/roles';

let aboutFAQsToRender = aboutFAQsUser;

const AboutPanels = () => (
  <AuthUserContext.Consumer>
    {authUser => {
      if (authUser && !!authUser.roles[ROLES.ADMIN]) {
        aboutFAQsToRender = aboutFAQsUser.concat(aboutFAQsAdmin);
      }
      return (
        <Fragment>
          {aboutFAQsToRender.map(item => (
            <ExpansionPanel key={item.question}>
              <ExpansionPanelSummary
                expandIcon={
                  <Fragment>
                    <Icon color='secondary'>{item.icon}</Icon>{' '}
                    <Icon>expand_more</Icon>
                  </Fragment>
                }
              >
                <Typography color='primary' style={{ fontWeight: 'bold' }}>
                  {item.question}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{item.answer}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Fragment>
      );
    }}
  </AuthUserContext.Consumer>
);

AboutPanels.propTypes = {};

export default withFirebase(AboutPanels);
