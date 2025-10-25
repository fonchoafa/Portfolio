import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with navbar offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div 
          className={styles.logo}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          F<span className={styles.logoHighlight}>.</span>A
        </div>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className={`${styles.line} ${isMenuOpen ? styles.line1 : ""}`} />
          <div className={`${styles.line} ${isMenuOpen ? styles.line2 : ""}`} />
          <div className={`${styles.line} ${isMenuOpen ? styles.line3 : ""}`} />
        </button>

        {/* Mobile Menu Dropdown */}
        <ul
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className={`${styles.mobileLink} ${activeSection === 'home' ? styles.active : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${styles.mobileLink} ${activeSection === 'about' ? styles.active : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`${styles.mobileLink} ${activeSection === 'projects' ? styles.active : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${styles.mobileLink} ${activeSection === 'contact' ? styles.active : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;