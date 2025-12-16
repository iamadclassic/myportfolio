import React, { useState, useEffect } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import LogoT from './LogoT';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔽 Hide navbar on scroll down (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
        setIsOpen(false); // close menu when scrolling
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const styles = {
    navbar: {
      width: '100%',
      backgroundColor: '#001F3F',
      padding: '1rem 1.5rem',
      position: 'fixed',
      top: isMobile && !showNavbar ? '-80px' : '0',
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      boxSizing: 'border-box',
      transition: 'top 0.3s ease',
      overflowX: 'hidden',
    },

    logoWrapper: {
      position: isMobile ? 'absolute' : 'static',
      left: isMobile ? '50%' : 'auto',
      transform: isMobile ? 'translateX(-50%)' : 'none',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000,
    },

    hamburger: {
      fontSize: '2rem',
      color: '#7FDBFF',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      display: isMobile ? 'block' : 'none',
      marginLeft: 'auto',
      padding: 0,
      lineHeight: 1,
      zIndex: 1001,
    },

    navLinks: {
      display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'fixed' : 'static',
      top: '64px',
      left: 0,
      width: '100%',
      backgroundColor: isMobile ? '#001F3F' : 'transparent',
      padding: isMobile ? '1rem 0' : 0,
      margin: 0,
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem',
      zIndex: 999,
      listStyle: 'none',
    },

    link: {
      color: '#7FDBFF',
      textDecoration: 'none',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      textAlign: 'center',
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logoWrapper}>
        <a href="#home" aria-label="Home">
          <LogoT size={40} color="#7FDBFF" />
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        style={styles.hamburger}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Links */}
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
