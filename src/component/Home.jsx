// src/component/Home.jsx
import React from 'react';
import useIsMobile from '../hooks/useIsMobile'; // Create this hook or use window check

const Home = ({ scrollToContact }) => {
  const isMobile = useIsMobile();

  const styles = {
    home: {
      minHeight: '100vh',
      background: '#001f3f',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '2rem 1rem' : '0 5%',
      textAlign: 'center',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '3rem',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      marginBottom: '2rem',
      color: '#dddddd',
    },
    buttons: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
      width: isMobile ? '100%' : 'auto',
    },
    button: {
      padding: '0.9rem 1.8rem',
      border: 'none',
      backgroundColor: '#7FDBFF',
      color: '#001F3F',
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: '5px',
      width: isMobile ? '100%' : 'auto',
      transition: 'all 0.3s ease',
    },
  };

  const handleScrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={styles.home}>
      <h1 style={styles.heading}>
        Hi, I'm <span style={{ color: '#7FDBFF', fontWeight: 'bold' }}>ADEBAYO TOBILOBA.O</span>
      </h1>
      <p style={styles.subtitle}>
        A passionate Frontend Developer crafting beautiful web experiences.
      </p>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={scrollToContact}>
          Hire Me
        </button>
        <button style={styles.button} onClick={handleScrollToProjects}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Home;
