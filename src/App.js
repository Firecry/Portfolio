import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Hobby from './components/Hobby'
import './scss/App.scss';

function App() {
  return (
    <div className='body'>
      <Navbar />
        <Home />
        <Aboutme />
        <Projects />
        <Hobby />
      <Footer />
    </div>
  );
}

export default App;
