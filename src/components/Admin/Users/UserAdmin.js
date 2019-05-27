import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from '../../../firebase';
// import UserList from './UserList';
import Loader from '../../ui/Loader';
import UsersPanels from './UsersPanels/UsersPanels';

const INITIAL_STATE = {
  loading: false,
  users: [],
};

class UserAdmin extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { firebase } = this.props;
    this.setState({ loading: true });
    this.userList = firebase.users().onSnapshot(snapshot => {
      const users = [];
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
        {loading && <Loader />}
        <UsersPanels users={users} />
      </div>
    );
  }
}

UserAdmin.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(UserAdmin);
