import React, { useRef, useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Skills from './component/Skills';
import Contact from './component/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Import global CSS

const appContainerStyle = {
  width: '100vw',
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
};

function App() {
  const contactRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: 'mobile', // Disable AOS on mobile to prevent animation issues
    });

    // Apply global styles (optional if moved to CSS file)
    Object.assign(document.body.style, {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      width: '100%',
      overflowX: 'hidden',
      backgroundColor: '#001F3F',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    });
  }, []);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={appContainerStyle}>
      <Navbar />
      <Home scrollToContact={scrollToContact} />
      <About />
      <Project />
      <Skills />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;