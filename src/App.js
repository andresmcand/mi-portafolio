import React from 'react';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SocialIcons /> 
    </>
  );
}

export default App;
