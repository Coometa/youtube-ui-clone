import { ThemeProvider, createTheme } from '@material-ui/core'

import Home from './pages/Home'
import { useGlobalTheme } from './context/ThemeContext'

import { IThemeState } from './interfaces/Global'
import GlobalStyles from './styles/Global'

interface IBackground {
  dark: string
  default: string
  paper: string
}

const App: React.FC = () => {
  const { darkMode } = useGlobalTheme() as IThemeState

  const theme = createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        dark: darkMode ? '#181818' : '#f4f6f8',
        default: darkMode ? '#232323' : '#FFF',
        paper: darkMode ? '#232323' : '#FFF',
      } as IBackground,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles theme={theme} />
    </ThemeProvider>
  )
}

export default App