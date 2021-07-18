import { ThemeProvider, createTheme } from '@material-ui/core';

import Container from './components/templates/Container';
import Home from './components/organisms/Home';
import { useAuth } from './components/atoms/providers/Auth';
import { IBackground, IAUth } from './components/atoms/interfaces';

const App: React.FC = () => {
  const { darkMode } = useAuth() as IAUth;

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
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;