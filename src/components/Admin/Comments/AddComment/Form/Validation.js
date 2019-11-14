import React from 'react';
import PropTypes from 'prop-types';
// Internal
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  invalid: {
    color: theme.palette.error.main
  },
  valid: {
    color: '#28B463',
    fontWeight: 'bold'
  }
});

const Validation = ({
  classes,
  comment,
  type,
  endingIsValid,
  includesCode
}) => {
  const isValidLength = comment.length > 10;
  const isValidType = type !== '';

  const data = [
    { valid: isValidLength, text: 'Minimum 10 characters' },
    { valid: includesCode, text: 'Includes at least one code' },
    { valid: isValidType, text: 'Select comment type' },
    {
      valid: endingIsValid,
      text: 'End with a full stop',
      secondary: "Exclamation mark is valid if type is 'closing'"
    }
  ];

  return (
    <List dense>
      {data.map(item => (
        <ListItem key={item.text} className={classes.invalid}>
          <ListItemText
            primary={
              <Typography
                className={item.valid ? classes.valid : classes.invalid}
              >
                {item.text}
              </Typography>
            }
            secondary={
              <Typography style={{ color: '#bbb' }}>
                {item.secondary}
              </Typography>
            }
          />
          <ListItemIcon>
            <Icon className={item.valid ? classes.valid : classes.invalid}>
              {item.valid ? 'check' : 'close'}
            </Icon>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};

Validation.propTypes = {
  comment: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  endingIsValid: PropTypes.bool.isRequired,
  includesCode: PropTypes.bool.isRequired
};
export default withStyles(styles)(Validation);
