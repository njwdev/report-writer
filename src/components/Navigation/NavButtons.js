import React, { Fragment } from 'react';
import { AuthUserContext } from '../../components/Session/index';
import Button from '@material-ui/core/Button';
import SignOut from '../auth/SignOut/SignOut';

const NavButtons = () => {
  return (
    <Fragment>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <Fragment>
              {/* Buttons go here as children */}
              <Button color="primary" variant="contained" href="/home">
                Home
              </Button>
              <Button color="primary" variant="contained" href="/about">
                About
              </Button>
              <SignOut />
            </Fragment>
          ) : (
            <Fragment>
              <Button color="primary" variant="contained" href="/signin">
                Sign In
              </Button>
              <Button color="primary" variant="contained" href="/about">
                About
              </Button>
            </Fragment>
          )
        }
      </AuthUserContext.Consumer>
    </Fragment>
  );
};

export default NavButtons;
