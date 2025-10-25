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

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Path to your CV file 
    link.href = '_Foncho_Afanwi_Ngwa(CV).pdf'; 

    // Set the download attribute with the desired file name
    link.download = 'Foncho-Afanwi-CV.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              Software Engineer
            </h2>
            <p className={styles.description}>
              I build modern web applications using the MERN stack, develop custom WordPress solutions with PHP, and deliver clean code with exceptional user experiences across all platforms.
            </p>
            <div className={styles.ctaButtons}>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={styles.primaryButton}
              >
                View My Work
              </button>
              <button 
                onClick={handleDownloadCV} 
                className={styles.secondaryButton}
              >
                Download CV
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
              Building responsive web applications using the MERN stack (MongoDB, Express, React, Node.js) and developing robust backend solutions with PHP/Laravel.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>WordPress Design</h3>
            <p>
              Custom WordPress theme development and plugin creation, meticulously tailored to your specific business requirements and brand identity.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>UI/UX Focus</h3>
            <p>
              Designing intuitive, user-centered interfaces with a strong focus on exceptional user experiences with functional efficiency to create engaging digital interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;