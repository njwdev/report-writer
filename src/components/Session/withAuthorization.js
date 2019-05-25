import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../firebase';
import AuthUserContext from './context';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuth extends React.Component {
    componentDidMount() {
      const { firebase, history } = this.props;
      this.listener = firebase.onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            history.push(ROUTES.LOGIN);
          }
        },
        () => history.push(ROUTES.LOGIN),
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (condition(authUser) ? <Component {...this.props} /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  WithAuth.propTypes = {
    firebase: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  return compose(
    withRouter,
    withFirebase,
  )(WithAuth);
};

export default withAuthorization;
