import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import About from './components/About';

import './css/index.min.css'

function App() {
  return (
    <main className='main__component'>
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
