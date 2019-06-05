import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PaperContainer from '../../../layout/Container/PaperContainer';
// Other
import commentCodes from '../../../../constants/commentCodes';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  code: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
});

const data = (title, examples, code) => ({ title, examples, code });

const listItems = [
  data("Student's Name", 'Maria, Alberto, etc.', commentCodes.name),
  data('Subject pronouns', 'he, she', commentCodes.subject),
  data('Object pronouns', 'him, her', commentCodes.object),
  data('Possessive adjectives', 'his, her', commentCodes.adjective),
  data('Possessive pronouns', 'his, hers', commentCodes.possessive),
  data('Reflexive pronouns', 'himself, herself', commentCodes.reflexive),
];

const Guide = props => {
  const { classes } = props;
  return (
    <PaperContainer>
      <h3>Guide</h3>
      <Typography variant="caption" color="secondary">
        Each entry should end with a full stop (.) or, in rare case, an exclamation (!){' '}
        <strong>Do not add a space after the final character.</strong>
      </Typography>
      <List dense className={classes.root}>
        {listItems.map(item => (
          <Fragment key={item.code}>
            <ListItem key={item.code}>
              <ListItemText primary={item.title} secondary={item.examples} />
              <ListItemSecondaryAction>
                <Typography className={classes.code}>{item.code}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
      <h4>Example</h4>
      <Typography variant="caption">
        <strong>To be added as four separate comments:</strong>
      </Typography>
      <Typography color="secondary" variant="caption">
        Raquel has done very well this term. She has made good progress in all areas and has
        excelled herself in writing. She needs to continue working hard on her pronunciation. Have a
        a great break, Raquel!
      </Typography>
      <Typography color="primary" variant="caption">
        1NNN has done very well this term. 1SSS has made good progress in all areas and has excelled
        1RRR in writing. 1SSS needs to continue working hard on 1AAA pronunciation. Have a a great
        break, 1NNN!
      </Typography>
    </PaperContainer>
  );
};

Guide.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(styles)(Guide);
