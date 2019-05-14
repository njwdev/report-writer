import React, { Fragment } from 'react';
import { AuthUserContext } from '../../components/Session/index';
import Button from '@material-ui/core/Button';
import SignOutButton from '../auth/SignOut/SignOut';

const data = (link, text, icon) => {
  return { link, text, icon };
};

const authButtons = [
  data('home', 'Home', 'home'),
  data('account', 'Account', 'settings'),
  data('admin', 'Admin', 'verified_user'),
];

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
                <i
                  className="material-icons"
                  style={{
                    marginRight: '20%',
                  }}
                >
                  {item.icon}{' '}
                </i>
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
