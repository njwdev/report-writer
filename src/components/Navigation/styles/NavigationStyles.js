const navigationStyles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.background.contrastText
  },
  toolbarTitle: { flex: 1 },
  button: { color: theme.palette.primary.light },
  siteTitle: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

export default navigationStyles;
