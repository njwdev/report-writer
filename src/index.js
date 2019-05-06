import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/App/App';
import Firebase, { FirebaseContext } from './firebase';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#bf360c',
    },
    background: {
      default: '#1a237e',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'PT Mono',
  },
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
