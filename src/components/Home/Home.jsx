import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Home.module.css';
import profileImage from '/images/fonchopicture.jpg';

const socialLinks = [
  { href: 'https://github.com/fonchoafa', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/foncho-afa/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://web.facebook.com/foncho.alfa', icon: FaFacebook, label: 'Facebook' },
];

const services = [
  {
    title: 'Full-Stack Development',
    description:
      'Building responsive web applications using the MERN stack (MongoDB, Express, React, Node.js) and developing robust backend solutions with PHP/Laravel.',
  },
  {
    title: 'WordPress Design',
    description:
      'Custom WordPress theme development and plugin creation, meticulously tailored to your specific business requirements and brand identity.',
  },
  {
    title: 'UI/UX Focus',
    description:
      'Designing intuitive, user-centered interfaces with a strong focus on exceptional user experiences with functional efficiency to create engaging digital interactions.',
  },
];

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'Foncho_Afanwi_Ngwa(Resume).pdf';
    link.download = 'Foncho_Afanwi_Ngwa(Resume).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className={styles.home}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Text */}
          <div className={styles.textContent}>
            <p className={styles.greeting}>Hi there, I'm</p>
            <h1 className={styles.heading}>
              <span className={styles.nameHighlight}>Foncho Afanwi</span>
            </h1>
            <h2 className={styles.subheading}>Software Engineer</h2>
            <p className={styles.description}>
              I build modern web applications using the MERN stack and Laravel,
              and develop custom WordPress solutions with PHP — delivering clean
              code and exceptional user experiences across all platforms.
            </p>

            {/* CTA Buttons */}
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
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialLink}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={styles.imageContainer}>
            <img
              src={profileImage}
              alt="Foncho Afanwi"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>

      {/* What I Do */}
      <div className={styles.aboutPreview}>
        <h2 className={styles.sectionTitle}>What I Do</h2>
        <div className={styles.services}>
          {services.map((service) => (
            <div key={service.title} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
