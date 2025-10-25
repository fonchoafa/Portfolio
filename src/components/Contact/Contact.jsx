import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:fonchoafa@gmail.com";
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        
        <div className={styles.contactContent}>
          <div className={styles.contactText}>
            <h3 className={styles.contactHeading}>Ready to Bring Your Ideas to Life?</h3>
            <p className={styles.contactDescription}>
              I'm currently available for freelance work and new opportunities. 
              Whether you have a project in mind or just want to connect, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            
            <div className={styles.ctaContainer}>
              <button 
                onClick={handleEmailClick} 
                className={styles.ctaButton}
              >
                Say Hello
              </button>
              <p className={styles.ctaSubtext}>
                I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;