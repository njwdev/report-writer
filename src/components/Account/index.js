import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import SignOut from '../auth/SignOut/SignOut';
import accountStyles from './AccountStyles';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinkButton from '../ui/Buttons/LinkButton';

const condition = authUser => !!authUser;
const Account = props => {
  const { classes } = props;
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <i className="material-icons">settings</i>
            </Avatar>
            <Typography component="h1" variant="h5">
              Account Settings
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Email: <strong>{authUser.email}</strong>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <LinkButton
                    text="Change password"
                    link="account/changepassword"
                  />
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <SignOut />
                </ListItemText>
              </ListItem>
            </List>
          </Paper>
        </main>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization(condition)(withStyles(accountStyles)(Account));
