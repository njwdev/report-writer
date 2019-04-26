import React, { Component } from 'react';
import { withFirebase } from '../../../firebase';
import UserList from './UserList';

const INITIAL_STATE = {
  loading: false,
  users: [],
};

class Users extends Component {
  state = { ...INITIAL_STATE };
  componentDidMount() {
    this.setState({ loading: true });
    this.userList = this.props.firebase.users().onSnapshot(snapshot => {
      let users = [];
      snapshot.forEach(doc => users.push({ ...doc.data(), uid: doc.id }));
      this.setState({
        users,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.userList();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h3>Users</h3>
        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

export default withFirebase(Users);
