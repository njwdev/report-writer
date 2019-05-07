import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

const UserList = props => {
  const { users } = props;
  return (
    <div>
      <List dense>
        {users.map(user => (
          <React.Fragment key={user.uid}>
            <Paper>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Icon>person</Icon>
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary={user.username} secondary={user.email} />

                <ListItemSecondaryAction>
                  <Checkbox
                    // checked={this.state.checkedA}
                    // onChange={this.handleChange('checkedA')}
                    value="checkedA"
                  />
                  <IconButton aria-label="Delete">
                    <Icon>delete</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default UserList;
