import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },

  menuIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  logo: {
    height: 25,
  },

  grow: {
    flexGrow: 1,
  },

  icons: {
    padding: theme.spacing(3),
  },

  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}))