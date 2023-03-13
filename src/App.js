import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Introduction from './components/Introduction';

import './scss/index.css'

function App() {
  return (
    <ThemeProvider>
        <Header />
        <Introduction />
    </ThemeProvider>
  );
}

export default App;
