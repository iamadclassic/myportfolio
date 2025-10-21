// src/component/Skills.js
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

const Skills = () => {
  const isMobile = useIsMobile();

  const styles = {
    section: {
      backgroundColor: '#001F3F',
      color: '#ffffff',
      padding: isMobile ? '3rem 1rem' : '4rem 2rem',
      textAlign: 'center',
      minHeight: '70vh',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.8rem',
      marginBottom: '2.5rem',
      color: '#7FDBFF',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    skillItem: {
      maxWidth: '700px',
      margin: '1rem auto',
      textAlign: 'left',
      padding: isMobile ? '0 1rem' : 0,
    },
    skillLabelContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.3rem',
      fontWeight: '600',
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: '#7FDBFF',
    },
    progressBarBackground: {
      width: '100%',
      height: '15px',
      backgroundColor: '#003366',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    progressBarFill: (percent) => ({
      width: `${percent}%`,
      height: '100%',
      backgroundColor: '#7FDBFF',
      borderRadius: '10px 0 0 10px',
      transition: 'width 1s ease-in-out',
    }),
  };

  const skills = [
    { name: 'HTML5', percent: 95 },
    { name: 'CSS3', percent: 90 },
    { name: 'JavaScript (ES6+)', percent: 85 },
    { name: 'React.js', percent: 85 },
    { name: 'Node.js', percent: 70 },
    { name: 'Express.js', percent: 70 },
    { name: 'MongoDB', percent: 65 },
    { name: 'Stripe API', percent: 60 },
    { name: 'JWT Auth', percent: 75 },
    { name: 'Git & GitHub', percent: 90 },
    { name: 'Responsive Design', percent: 90 },
    { name: 'REST APIs', percent: 80 },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>
      {skills.map(({ name, percent }, index) => (
        <div key={index} style={styles.skillItem}>
          <div style={styles.skillLabelContainer}>
            <span>{name}</span>
            <span>{percent}%</span>
          </div>
          <div style={styles.progressBarBackground}>
            <div style={styles.progressBarFill(percent)} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
