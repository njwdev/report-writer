import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Session
import { withFirebase } from '../../firebase';
import { AuthUserContext } from '../Session/index';
import * as ROLES from '../../constants/roles';
// Buttons
import SignOutButton from '../ui/Buttons/SignOutButton';
import NavButton from '../ui/Buttons/NavButton';

const data = (link, text, icon, color) => ({ link, text, icon, color });

const authButtons = [
  data('home', 'Home', 'home', 'primary'),
  data('account', 'Account', 'settings', 'primary'),
];
const adminButtons = [data('admin', 'Admin', 'verified_user')];
const nonAuthButtons = [data('signin', 'Login', 'lock_open')];
let buttonsToRender = null;

const NavButtons = () => (
  <AuthUserContext.Consumer>
    {authUser => {
      if (!authUser) {
        buttonsToRender = nonAuthButtons;
      } else if (authUser && !!authUser.roles[ROLES.ADMIN]) {
        buttonsToRender = authButtons.concat(adminButtons);
      } else {
        buttonsToRender = authButtons;
      }

      return (
        <Fragment>
          {buttonsToRender.map(item => (
            <NavButton key={item.text} link={item.link} icon={item.icon} text={item.text} />
          ))}
          {authUser ? <SignOutButton /> : null}
        </Fragment>
      );
    }}
  </AuthUserContext.Consumer>
);

NavButtons.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(NavButtons);
