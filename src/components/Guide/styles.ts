import { makeStyles } from '@material-ui/core';

export const useAppbarItemStyles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  subheader: {
    textTransform: 'uppercase',
  }
})