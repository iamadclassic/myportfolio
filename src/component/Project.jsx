// src/component/Project.js
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

const Project = () => {
  const isMobile = useIsMobile();

  const styles = {
    section: {
      backgroundColor: '#001f3f',
      color: '#ffffff',
      padding: isMobile ? '3rem 1rem' : '4rem 2rem',
      textAlign: 'center',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.8rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      color: '#7FDBFF',
      fontWeight: '700',
    },
    card: {
      backgroundColor: '#003366',
      borderRadius: '15px',
      padding: isMobile ? '1.5rem' : '2rem',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'left',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    title: {
      fontSize: isMobile ? '1.4rem' : '1.8rem',
      color: '#7FDBFF',
      marginBottom: '1rem',
      fontWeight: '600',
    },
    description: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: '#ccc',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
    },
    button: {
      padding: '0.6rem 1.2rem',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#7FDBFF',
      color: '#001f3f',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration: 'none',
      width: isMobile ? '100%' : 'auto',
      marginBottom: isMobile ? '0.5rem' : '0',
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
    },
  };

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.card}>
        <h3 style={styles.title}>Subscription & Payment Website</h3>
        <p style={styles.description}>
          A full‑featured subscription and payment web app for digital product sales. 
          It allows user registration, plan selection, and secure Stripe payments. 
          Features include recurring billing, upgrades/downgrades, and utility bill payments.
        </p>
        <div style={styles.buttonGroup}>
          <a href="https://buydatafromme.netlify.app/" target="_blank" rel="noopener noreferrer" style={styles.button}>
            Live Demo
          </a>
          <a href="https://github.com/iamadclassic/vgh.git" target="_blank" rel="noopener noreferrer" style={styles.button}>
            View Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
