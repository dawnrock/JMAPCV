import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="main-sections">
        <div className="container">
          <About />
          <Experience />
          <Skills />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
