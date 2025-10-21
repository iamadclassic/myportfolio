// src/component/About.jsx
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
import myimage from '../assets/Image/myimage.jpg';

const About = () => {
  const isMobile = useIsMobile();

  const styles = {
    section: {
      minHeight: '100vh',
      backgroundColor: '#001F3F',
      color: '#ffffff',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    image: {
      width: isMobile ? '140px' : '180px',
      height: isMobile ? '140px' : '180px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '4px solid #7FDBFF',
      marginBottom: isMobile ? '1.5rem' : '0',
      marginRight: isMobile ? '0' : '2rem',
    },
    text: {
      maxWidth: '800px',
      fontSize: isMobile ? '1rem' : '1.2rem',
      lineHeight: '1.6',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      marginBottom: '1.5rem',
      color: '#7FDBFF',
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
        <img src={myimage} alt="Adebayo Tobiloba" style={styles.image} />
        <div>
          <h2 style={styles.heading}>About Me</h2>
          <p style={styles.text}>
            I'm Adebayo Tobiloba, a passionate Frontend Developer with a strong background in building responsive,
            high‑quality web applications. I specialize in React.js and love creating seamless user experiences.
            With a keen eye for design and detail, I enjoy turning complex problems into elegant solutions.
            When I’m not coding, I’m probably exploring new tech, reading about UI/UX, or contributing to open‑source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
