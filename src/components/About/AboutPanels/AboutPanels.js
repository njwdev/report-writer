import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AboutFAQsUser from '../AboutFAQs/AboutFAQsUser';
import AboutFAQsAdmin from '../AboutFAQs/AboutFAQsAdmin';
import { withFirebase } from '../../../firebase';
import { AuthUserContext } from '../../Session';
import * as ROLES from '../../../constants/roles';

let aboutFAQsToRender = AboutFAQsUser;

const AboutPanels = () => (
  <AuthUserContext.Consumer>
    {authUser => {
      if (authUser && !!authUser.roles[ROLES.ADMIN]) {
        aboutFAQsToRender = AboutFAQsUser.concat(AboutFAQsAdmin);
      }
      return (
        <Fragment>
          {aboutFAQsToRender.map(item => (
            <ExpansionPanel key={item.question}>
              <ExpansionPanelSummary
                expandIcon={(
                  <Fragment>
                    <i className="material-icons">{item.icon}</i>{' '}
                    <i className="material-icons">expand_more</i>
                  </Fragment>
)}
              >
                <Typography>{item.question}</Typography>
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
