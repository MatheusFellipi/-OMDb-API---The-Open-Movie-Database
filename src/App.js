import React from 'react'
import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset'
import { GlobalStyle } from './styles/Global'
import theme from './styles/theme/thema'

import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
