import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'
import './css/App.css'

function App() {
  return (
    <div className='body'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
