import React from "react";
import styles from "./About.module.css";

const stats = [
  { number: "5+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "13+", label: "Technologies" },
  { number: "100%", label: "Remote Ready" },
];

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "WordPress",
  "PHP",
  "Laravel",
  "CSS3",
  "HTML5",
  "Git",
  "REST APIs",
  "Responsive Design",
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bio & Skills Card */}
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
                {skills.map((skill, index) => (
                  <span key={index} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
