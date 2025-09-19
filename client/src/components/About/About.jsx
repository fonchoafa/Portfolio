import React from "react";
import styles from "./About.module.css";
import profilePic from "../../assets/foncho.png";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.container}>
        <img 
          src={profilePic} 
          alt="Foncho Afanwi" 
          className={styles.profileImage}
        />
        <div className={styles.text}>
          <p>
            I’m a recent Software Engineering graduate specializing in the MERN stack 
            and WordPress design. I build scalable web apps and stunning CMS websites.
          </p>
          {/* Add more bio text */}
        </div>
      </div>
    </section>
  );
};

export default About;