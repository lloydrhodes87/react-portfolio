import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Portfolio from './components/portfolio/portfolio.component';
import About from './components/about/about.component';
import Skills from './components/skills/skills.component';
import Contact from './components/contact/contact.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
