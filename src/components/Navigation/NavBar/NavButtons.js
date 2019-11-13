import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Internal
import { withFirebase } from '../../../firebase';
import { AuthUserContext } from '../../Session/index';
import * as ROLES from '../../../constants/roles';
import { authButtons, adminButtons, nonAuthButtons } from '../data';
import { NavButton } from '../../ui/Buttons';
import LogoutButton from './LogoutButton';

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
              key={item.link}
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
