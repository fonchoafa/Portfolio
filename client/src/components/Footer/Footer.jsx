import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:fonchoafa@gmail.com";
  };

  const checkScrollTop = () => {
    setShowBackToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <div>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:fonchoafa@gmail.com" className={styles.contactLink}>
                fonchoafa@gmail.com
              </a>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <div>
              <span className={styles.contactLabel}>Phone</span>
              <span className={styles.contactText}>+237 (683) 760-0682</span>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <div>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactText}>Remote Worldwide</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialSection}>
          <h4 className={styles.socialTitle}>Connect With Me</h4>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/fonchoafanwi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialLink}
            >
              <FaGithub className={styles.socialIcon} />
            </a>
            <a
              href="https://linkedin.com/in/fonchoafanwi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a
              href="https://twitter.com/fonchoafanwi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={styles.socialLink}
            >
              <FaTwitter className={styles.socialIcon} />
            </a>
            <a
              href="mailto:fonchoafa@gmail.com"
              aria-label="Email"
              className={styles.socialLink}
              onClick={handleEmailClick}
            >
              <FaEnvelope className={styles.socialIcon} />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className={styles.copyrightSection}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Foncho Afanwi. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
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