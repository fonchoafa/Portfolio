import React from 'react';
import styles from './Home.module.css';
import profileImage from '../../assets/fonchopicture.jpg';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.home}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>
              Hi, I'm <span className={styles.nameHighlight}>Foncho Afanwi</span>
            </h1>
            <h2 className={styles.subheading}>
              MERN Stack Developer & WordPress Expert
            </h2>
            <p className={styles.description}>
              I build modern web applications and beautiful WordPress sites with 
              clean code and exceptional user experiences.
            </p>
            <div className={styles.ctaButtons}>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={styles.primaryButton}
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={styles.secondaryButton}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img 
              src={profileImage}
              alt="Foncho Afanwi" 
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>

      {/* Short About Preview */}
      <div className={styles.aboutPreview}>
        <h2 className={styles.sectionTitle}>What I Do</h2>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <h3>Full-Stack Development</h3>
            <p>
              Building responsive web applications using the MERN stack 
              (MongoDB, Express, React, Node.js).
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>WordPress Design</h3>
            <p>
              Custom WordPress themes and plugins tailored to your business needs.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>UI/UX Focus</h3>
            <p>
              Creating intuitive user interfaces with exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;