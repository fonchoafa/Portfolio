import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back-to-top button based on scroll position
  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={styles.socialIcon} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className={styles.socialIcon} />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
          >
            <FaEnvelope className={styles.socialIcon} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Foncho Afanwi. All rights reserved.
        </p>

        {/* Back to Top Button (conditionally rendered) */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;