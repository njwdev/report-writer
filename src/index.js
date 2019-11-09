import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './containers/App/App';
import Firebase, { FirebaseContext } from './firebase';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    // type: 'light',
    primary: {
      main: purple[800]
    },
    secondary: {
      main: orange[400]
    },
    background: {
      default: '#1a237e',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Kanit'
  },
  overrides: {
    // Style sheet name ⚛️
    MuiTextField: {
      fontFamily: 'McLaren'
    }
  }
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
  document.getElementById('root')
);
