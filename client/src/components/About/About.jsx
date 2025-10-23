import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.bio}>
              As a recent Software Engineering graduate, I specialize in MERN
              stack development and PHP-based WordPress design. I build scalable
              web applications and stunning CMS websites, delivering clean code
              and exceptional user experiences across both JavaScript and PHP
              ecosystems.
            </p>
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Technologies I Work With:</h3>
              <div className={styles.skillList}>
                <span className={styles.skill}>React.js</span>
                <span className={styles.skill}>Node.js</span>
                <span className={styles.skill}>Express.js</span>
                <span className={styles.skill}>MongoDB</span>
                <span className={styles.skill}>JavaScript</span>
                <span className={styles.skill}>WordPress</span>
                <span className={styles.skill}>PHP</span>
                <span className={styles.skill}>Laravel</span>
                <span className={styles.skill}>CSS3</span>
                <span className={styles.skill}>HTML5</span>
                <span className={styles.skill}>Git</span>
                <span className={styles.skill}>REST APIs</span>
                <span className={styles.skill}>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
