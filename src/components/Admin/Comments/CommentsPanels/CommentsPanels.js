import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Typography from '@material-ui/core/Typography';
import CommentsList from '../CommentsList';

const data = (type, content) => ({ type, content });

const CommentsPanels = props => {
  const { comments, onDelete } = props;
  const introComments = comments.filter(comment => comment.type === 'intro');
  const positiveComments = comments.filter(comment => comment.type === 'positive');
  const negativeComments = comments.filter(comment => comment.type === 'negative');
  const closingComments = comments.filter(comment => comment.type === 'closing');
  const commentsPanels = [
    data('Intro', introComments),
    data('Positive', positiveComments),
    data('Negative', negativeComments),
    data('Closing', closingComments),
  ];
  return (
    <Fragment>
      {commentsPanels.map(item => (
        <ExpansionPanel key={item.type} style={{ backgroundColor: 'primary' }}>
          <ExpansionPanelSummary expandIcon={<i className="material-icons">expand_more</i>}>
            <Typography>{item.type}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CommentsList comments={item.content} onDelete={onDelete} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Fragment>
  );
};

CommentsPanels.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CommentsPanels;
