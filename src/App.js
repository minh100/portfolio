import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Project from './Components/Project.js';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
