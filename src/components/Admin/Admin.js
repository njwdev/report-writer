import React, { Component } from 'react';
import { withFirebase } from '../../firebase';
const INITIAL_STATE = {
  loading: false,
  users: [],
};

class Admin extends Component {
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
    const UserList = ({ users }) => (
      <ul>
        {console.log(users)}
        {users.map(user => (
          <li key={user.uid}>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>E-Mail:</strong> {user.email}
            </span>
            <span>
              <strong>Username:</strong> {user.username}
            </span>
          </li>
        ))}
      </ul>
    );
    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}
        <UserList users={users} />
      </div>
    );
  }
}

export default withFirebase(Admin);
