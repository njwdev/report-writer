import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800]
    },
    secondary: {
      main: orange[400]
    },
    error: {
      main: red[500]
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
    // Style sheet name
    MuiTextField: {
      fontFamily: 'McLaren'
    }
  }
});
