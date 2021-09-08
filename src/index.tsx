import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalThemeProvider } from './context/ThemeContext';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <GlobalThemeProvider>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </GlobalThemeProvider>,
  document.getElementById('root')
);