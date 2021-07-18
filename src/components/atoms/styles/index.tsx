import {
  makeStyles
} from '@material-ui/core';

import { IDark } from './../interfaces'
import video from '../videoList';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: video.length < 9 ? '100vh' : '100%',
    backgroundColor: (theme.palette.background as IDark).dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  menuIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  icons: {
    padding: theme.spacing(3),
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  listItemIcon: {
    color: '#a0a0a0',
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));