import React, { Fragment } from 'react';
import { AuthUserContext } from '../../components/Session/index';
import Button from '@material-ui/core/Button';
import * as ROLES from '../../constants/roles';
import { withFirebase } from '../../firebase';

const data = (link, text, icon, color) => {
  return { link, text, icon, color };
};

const authButtons = [
  data('home', 'Home', 'home', 'primary'),
  data('account', 'Account', 'settings', 'primary'),
];

const adminButtons = [data('admin', 'Admin', 'verified_user')];

const nonAuthButtons = [data('signin', 'Sign In', 'lock_open')];

const signOutButton = [
  data('logout', 'Logout', 'power_settings_new', 'secondary'),
];

const NavButtons = props => {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <Fragment>
            {authButtons.map(item => (
              <Button
                key={item.link}
                color={item.color}
                variant="contained"
                href={`/${item.link}`}
              >
                <i
                  className="material-icons"
                  style={{
                    marginRight: '20%',
                  }}
                >
                  {item.icon}
                </i>
                {item.text}
              </Button>
            ))}
            {authUser && !!authUser.roles[ROLES.ADMIN] ? (
              <Fragment>
                {adminButtons.map(item => (
                  <Button
                    key={item.link}
                    color={'primary'}
                    variant="contained"
                    href={`/${item.link}`}
                  >
                    <i
                      className="material-icons"
                      style={{
                        marginRight: '20%',
                      }}
                    >
                      {item.icon}
                    </i>
                    {item.text}
                  </Button>
                ))}
              </Fragment>
            ) : null}

            {signOutButton.map(item => (
              <Button
                key={item.link}
                color={item.color}
                variant="contained"
                onClick={props.firebase.signOutHandler}
              >
                <i
                  className="material-icons"
                  style={{
                    marginRight: '20%',
                  }}
                >
                  {item.icon}
                </i>
                {item.text}
              </Button>
            ))}
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
                <i
                  className="material-icons"
                  style={{
                    marginRight: '20%',
                    display: 'flex',
                  }}
                >
                  {item.icon}
                </i>
                {item.text}
              </Button>
            ))}
          </Fragment>
        )
      }
    </AuthUserContext.Consumer>
  );
};

export default withFirebase(NavButtons);
