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
// Other
import PageContainer from '../../../layout/Container/PageContainer';

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
  data("Student's Name", 'Maria, Alberto, etc.', 'XXX'),
  data('Subject pronouns', 'he, she, you', 'XSP'),
  data('Object pronouns', 'him, her, you', 'XOP'),
  data('Possessive adjectives', 'his, her, your', 'XPA'),
  data('Possessive pronouns', 'his, hers, yours', 'XPP'),
];

const Guide = props => {
  const { classes } = props;
  return (
    <PageContainer>
      <h3>Guide</h3>
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
    </PageContainer>
  );
};

Guide.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(styles)(Guide);
