import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import IA from './components/IA';
import Horizonte from './components/Horizonte';
import Footer from './components/Footer';
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
          <Education />
          <Skills />
          <Horizonte />
          <IA />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
