import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          ENG<span className={styles.logoHighlight}>.</span>A
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          <li>
            <NavLink 
              to="/" 
              className={styles.navLink}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={styles.navLink}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={styles.navLink}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={styles.navLink}
            >
              Contact
            </NavLink>
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
          onClick={closeMenu}
        >
          <li>
            <NavLink 
              to="/" 
              className={styles.mobileLink}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={styles.mobileLink}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={styles.mobileLink}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={styles.mobileLink}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;