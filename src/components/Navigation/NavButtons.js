import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Session
import { withFirebase } from '../../firebase';
import { AuthUserContext } from '../Session/index';
import * as ROLES from '../../constants/roles';
// Buttons
import { NavButton } from '../ui/Buttons';
import LogoutButton from './LogoutButton';

const data = (link, text, icon, color) => ({ link, text, icon, color });

const authButtons = [
  data('home', 'Write', 'edit', 'primary'),
  data('account', 'Account', 'settings', 'primary'),
  data('about', '', 'help', 'primary')
];
const adminButtons = [data('admin', 'Admin', 'verified_user', 'secondary')];
const nonAuthButtons = [
  data('login', 'Login', 'lock_open'),
  data('about', '', 'help', 'primary')
];
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
            <NavButton
              key={item.text}
              link={item.link}
              icon={item.icon}
              text={item.text}
              color={item.color}
            />
          ))}
          {authUser ? <LogoutButton /> : null}
        </Fragment>
      );
    }}
  </AuthUserContext.Consumer>
);

NavButtons.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(NavButtons);
