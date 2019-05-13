import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../firebase';
import AuthUserContext from './context';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuth extends React.Component {
    componentDidMount() {
      const { firebase, history } = this.props;
      // this.listener = firebase.auth.onAuthStateChanged(authUser => {
      //   if (authUser) {
      //     firebase
      //       .user(authUser.uid)
      //       .once('value')
      //       .then(snapshot => {
      //         const dbUser = snapshot.val();
      //         // default empty roles
      //         if (!dbUser.roles) {
      //           dbUser.roles = {};
      //         }

      //         // merge auth and db user
      //         authUser = {
      //           uid: authUser.uid,
      //           email: authUser.email,
      //           ...dbUser,
      //         };

      //         if (!condition(authUser)) {
      //           history.push(ROUTES.SIGN_IN);
      //         }
      //       });
      //   } else {
      //     history.push(ROUTES.SIGN_IN);
      //   }

      this.listener = firebase.onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            history.push(ROUTES.SIGN_IN);
          }
        },
        () => history.push(ROUTES.SIGN_IN),
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuth);
};

export default withAuthorization;
