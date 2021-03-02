import { createMuiTheme } from '@material-ui/core';
import React from 'react';
import DashBoard from './features/covid/DashBoard/DashBoard';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato', 'sans-serif'
    ].join(','),
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashBoard />
    </ThemeProvider>
  );
}

export default App;
