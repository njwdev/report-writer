import React from 'react';
import PropTypes from 'prop-types';
// Internal
import AuthUserContext from './context';
import { withFirebase } from '../../firebase';
import Loader from '../ui/Loader';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
      loading: true
    };

    componentDidMount() {
      const { firebase } = this.props;
      this.listener = firebase.onAuthUserListener(
        authUser => {
          this.setState({ authUser, loading: false });
        },
        () => {
          this.setState({ authUser: null, loading: false });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { authUser, loading } = this.state;
      return !loading ? (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      ) : (
        <Loader />
      );
    }
  }

  WithAuthentication.propTypes = { firebase: PropTypes.shape({}).isRequired };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
