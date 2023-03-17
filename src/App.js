import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

import './scss/index.css'

function App() {
  return (
    <main className='main__component'>
        <Header />
        <Home />
        <Introduction />
        <About />
        <Contact />
        <Footer />
    </main>
  );
}

export default App;
