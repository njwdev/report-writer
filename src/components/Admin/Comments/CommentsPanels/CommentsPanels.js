import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Typography from '@material-ui/core/Typography';

const data = (type, content) => ({ type, content });

const commentsPanels = [
  data('Intro', 'intro comment'),
  data('Positive', 'positive comment'),
  data('Negative', 'negative comment'),
  data('Closing', 'closing comment'),
];

const CommentsPanels = () => (
  <Fragment>
    {commentsPanels.map(type => (
      <ExpansionPanel key={type.category} style={{ backgroundColor: 'primary' }}>
        <ExpansionPanelSummary expandIcon={<i className="material-icons">expand_more</i>}>
          <Typography>{type.type}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{type.content}</ExpansionPanelDetails>
      </ExpansionPanel>
    ))}
  </Fragment>
);

CommentsPanels.propTypes = {};

export default CommentsPanels;
