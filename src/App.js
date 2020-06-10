import React from 'react';
//import './App.css';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <NavBar />
      <Cards />
    </ThemeProvider>
  );
}

export default App;
