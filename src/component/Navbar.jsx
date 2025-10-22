import React, { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import LogoT from './LogoT';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const styles = {
    navbar: {
      width: '100%',
      backgroundColor: '#001F3F',
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
    },
    hamburger: {
      fontSize: '2rem',
      color: '#7FDBFF',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      display: isMobile ? 'block' : 'none',
      zIndex: 1001,
    },
    logoWrapper: {
      position: 'absolute',
      ...(isMobile
        ? {
            left: '50%',
            transform: 'translateX(-50%)',
          }
        : {
            left: '0',
            transform: 'none',
          }),
      zIndex: 1000,
    },
    navLinks: {
      display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'fixed' : 'static',
      top: isMobile ? '64px' : 'auto',
      left: 0,
      width: '100vw',
      maxWidth: '100vw',
      backgroundColor: isMobile ? '#001F3F' : 'transparent',
      padding: isMobile ? '1rem 0' : 0,
      margin: 0,
      borderRadius: isMobile ? '0 0 8px 8px' : '0',
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'unset',
      gap: '1.5rem',
      zIndex: 999,
      overflowX: 'hidden',
      boxSizing: 'border-box',
      listStyle: 'none', // 🔹 removes bullet points
    },
    link: {
      color: '#7FDBFF',
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      textAlign: 'center',
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Left: Hamburger */}
      <button
        onClick={toggleMenu}
        style={styles.hamburger}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Center (mobile) or Left (desktop): Logo */}
      <div style={styles.logoWrapper}>
        <a href="#home" aria-label="Home">
          <LogoT size={40} color="#7FDBFF" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
