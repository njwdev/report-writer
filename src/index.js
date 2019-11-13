import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from './firebase';
// Themes & Styles
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './MUItheme';
import './index.css';
// Internal
import App from './containers/App/App';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
