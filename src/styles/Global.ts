import { createGlobalStyle } from 'styled-components'
import { makeStyles } from '@material-ui/core'

interface ITheme {
  palette: IPalette
}

interface IDark {
  dark?: string
}

interface IPalette {
  background: IDark
}

export default createGlobalStyle`
  body {
    background: ${props => (props.theme as ITheme).palette.background.dark};
  }
`

export const useListStyles = makeStyles({
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
})