const navigationStyles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.contrastText,
  },
  toolbarTitle: {
    flex: 1,
  },
  button: {
    color: theme.palette.background.contrastText,
  },
  siteTitle: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

export default navigationStyles;
