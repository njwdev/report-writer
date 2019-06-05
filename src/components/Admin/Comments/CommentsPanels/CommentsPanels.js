import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Typography from '@material-ui/core/Typography';
import CommentsList from '../CommentsList';

const data = (type, content, length) => ({ type, content, length });

const CommentsPanels = props => {
  const { comments, onDelete } = props;

  const numberOfComments = comments.length;

  const introComments = comments.filter(comment => comment.type === 'intro');
  const positiveComments = comments.filter(comment => comment.type === 'positive');
  const negativeComments = comments.filter(comment => comment.type === 'negative');
  const closingComments = comments.filter(comment => comment.type === 'closing');
  const commentsPanels = [
    data('Intro', introComments, introComments.length),
    data('Positive', positiveComments, positiveComments.length),
    data('Negative', negativeComments, negativeComments.length),
    data('Closing', closingComments, closingComments.length),
  ];
  return (
    <Fragment>
      {commentsPanels.map(item => (
        <ExpansionPanel key={item.type} style={{ backgroundColor: 'primary' }}>
          <ExpansionPanelSummary expandIcon={<i className="material-icons">expand_more</i>}>
            <Typography>
              <strong>{item.type}</strong> - {item.length}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CommentsList comments={item.content} onDelete={onDelete} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
      <Typography variant="caption" style={{ textAlign: 'right', margin: '10px' }}>
        Total - {numberOfComments}
      </Typography>
    </Fragment>
  );
};

CommentsPanels.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CommentsPanels;
