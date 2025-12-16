// src/component/Project.js
import React from "react";
import useIsMobile from "../hooks/useIsMobile";

const Project = () => {
  const isMobile = useIsMobile();

  const styles = {
    section: {
      backgroundColor: "#001f3f",
      color: "#ffffff",
      padding: isMobile ? "3rem 1rem" : "4rem 2rem",
      textAlign: "center",
    },
    heading: {
      fontSize: isMobile ? "2rem" : "2.8rem",
      marginBottom: isMobile ? "2rem" : "3rem",
      color: "#7FDBFF",
      fontWeight: "700",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#003366",
      borderRadius: "15px",
      padding: isMobile ? "1.5rem" : "2rem",
      textAlign: "left",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    title: {
      fontSize: isMobile ? "1.4rem" : "1.7rem",
      color: "#7FDBFF",
      marginBottom: "1rem",
      fontWeight: "600",
    },
    description: {
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      color: "#ddd",
      marginBottom: "1.5rem",
      lineHeight: "1.6",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "1rem",
    },
    button: {
      padding: "0.6rem 1.2rem",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#7FDBFF",
      color: "#001f3f",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
      textAlign: "center",
      width: isMobile ? "100%" : "auto",
    },
  };

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.grid}>
        {/* 🔹 PROJECT 1 */}
        <div style={styles.card}>
          <h3 style={styles.title}>Subscription & Payment Website</h3>
          <p style={styles.description}>
            A full-featured subscription and payment web app for digital product
            sales. Supports secure Stripe payments, recurring billing, plan
            upgrades/downgrades, and utility bill payments.
          </p>
          <div style={styles.buttonGroup}>
            <a
              href="https://buydatafromme.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/iamadclassic/vgh.git"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>

        {/* 🔹 PROJECT 2 */}
        <div style={styles.card}>
          <h3 style={styles.title}>Weather Site 🌦</h3>
          <p style={styles.description}>
            A responsive weather application built with React. Provides real-time
            weather data, city-based timezone updates, temperature conditions,
            wind speed, and dynamic UI changes based on weather.
          </p>
          <div style={styles.buttonGroup}>
            <a
              href="https://tobyweather.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/iamadclassic/weather"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>

        {/* 🔹 PROJECT 3 */}
        <div style={styles.card}>
          <h3 style={styles.title}>Dictionary Website 📖</h3>
          <p style={styles.description}>
            A modern dictionary application that allows users to search word
            meanings, phonetics, examples, and parts of speech. Clean UI,
            responsive design, and fast API-driven results.
          </p>
          <div style={styles.buttonGroup}>
            <a
              href="https://tobidiction.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/iamadclassic/dictionary"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
