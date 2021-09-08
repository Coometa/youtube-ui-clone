import {
  makeStyles
} from '@material-ui/core'

import { ITheme } from '../../interfaces/Global'

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: (theme as unknown as ITheme).palette.background.dark
  }
}))