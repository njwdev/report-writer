import React, { Fragment } from 'react';
import { AuthUserContext } from '../../components/Session/index';
import Button from '@material-ui/core/Button';
import SignOutButton from '../auth/SignOut/SignOut';

const data = (link, text) => {
  return { link, text };
};

const authButtons = [data('home', 'Home'), data('account', 'Account')];

const nonAuthButtons = [data('signin', 'Sign In')];

const NavButtons = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <Fragment>
            {authButtons.map(item => (
              <Button
                key={item.link}
                color="primary"
                variant="contained"
                href={`/${item.link}`}
              >
                {item.text}
              </Button>
            ))}
            <SignOutButton />
          </Fragment>
        ) : (
          <Fragment>
            {nonAuthButtons.map(item => (
              <Button
                key={item.link}
                color="primary"
                variant="contained"
                href={`/${item.link}`}
              >
                {item.text}
              </Button>
            ))}
          </Fragment>
        )
      }
    </AuthUserContext.Consumer>
  );
};

export default NavButtons;
