import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects'
import './css/App.css';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <Home />
      <Footer />
      <Aboutme />
      <Projects />
    </div>
  );
}

export default App;
