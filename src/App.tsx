import { createMuiTheme } from '@material-ui/core';
import React from 'react';
import DashBoard from './features/covid/DashBoard/DashBoard';
import Footer from './features/covid/Footer/Footer';
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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
