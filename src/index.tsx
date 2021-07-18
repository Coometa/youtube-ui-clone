import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './components/atoms/providers/Auth';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);