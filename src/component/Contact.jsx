import React, { useRef, useState, forwardRef, useEffect, useState as useReactState } from 'react';
import emailjs from '@emailjs/browser';

// Hook for mobile detection (screen width <= 768px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useReactState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          setLoading(false);
        }
      );
  };

  // Base styles
  const styles = {
    section: {
      backgroundColor: '#001f3f',
      color: '#ffffff',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      textAlign: 'center',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.8rem',
      marginBottom: '1.2rem',
      color: '#7FDBFF',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    message: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: '#ccc',
      marginBottom: '2rem',
      maxWidth: isMobile ? '90%' : '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: '1.6',
    },
    contactInfo: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#7FDBFF',
      marginBottom: '1rem',
      textDecoration: 'none',
      display: 'block',
      transition: 'color 0.3s',
    },
    form: {
      backgroundColor: '#002b5c',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: '10px',
      maxWidth: isMobile ? '95%' : '500px',
      margin: '2rem auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'left',
      boxShadow: '0 4px 20px rgba(0, 127, 255, 0.1)',
    },
    input: {
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #7FDBFF',
      backgroundColor: '#003366',
      color: '#ffffff',
      outline: 'none',
      transition: 'border-color 0.3s ease, background-color 0.3s ease',
    },
    textarea: {
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #7FDBFF',
      backgroundColor: '#003366',
      color: '#ffffff',
      minHeight: '120px',
      outline: 'none',
      transition: 'border-color 0.3s ease, background-color 0.3s ease',
    },
    button: {
      padding: '0.75rem',
      fontSize: '1rem',
      backgroundColor: '#7FDBFF',
      color: '#001f3f',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
  };

  return (
    <section id="contact" ref={ref} style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.message}>
        I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <a href="tel:+2348146166269" style={styles.contactInfo}>
        📞 +234 8146166269
      </a>
      <a href="mailto:idowuadebayo226@gmail.com" style={styles.contactInfo}>
        ✉️ idowuadebayo226@gmail.com
      </a>

      <form id="message-form" ref={form} onSubmit={sendEmail} style={styles.form}>
        <input type="text" name="user_name" placeholder="Your Name" required style={styles.input} />
        <input type="email" name="user_email" placeholder="Your Email" required style={styles.input} />
        <textarea name="message" placeholder="Your Message" required style={styles.textarea}></textarea>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
});

export default Contact;
