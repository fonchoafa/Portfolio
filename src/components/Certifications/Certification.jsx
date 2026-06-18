import React from 'react';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import styles from './Certification.module.css';

/**
 * INSTRUCTIONS FOR REAL CERTIFICATIONS:
 * Replace each `verifyUrl` with the actual credential link from the issuer.
 * Remove any certificate entries that are not yet earned — placeholder data
 * with fake credential IDs looks unprofessional to recruiters.
 */
const certificationsData = [
  {
    id: 1,
    title: 'Internship & Job Preparation',
    issuer: 'Internshala Training',
    date: 'March 2026',
    credentialId: 'c61e7m5uc9j',
    description:
      '4-week comprehensive training covering job hunting strategies, professional gear building, front-end preparation, and a final project to prepare for entering the job market.',
    skills: ['Job Search Strategies', 'Resume Building', 'Interview Preparation', 'Professional Development'],
    verifyUrl: 'https://trainings.internshala.com/verify_certificate',
  },
  {
    id: 2,
    title: 'Full Stack Development Internship',
    issuer: 'Codveda Technologies',
    date: 'Feb 2026 – Mar 2026',
    credentialId: 'CV/A1/59206',
    description:
      'Hands-on internship focused on Full Stack Development. Demonstrated dedication, strong technical skills, and effective communication throughout the program.',
    skills: ['Full Stack Development', 'Frontend Development', 'Backend Development', 'Web Technologies'],
    verifyUrl: null,
  },
  {
    id: 3,
    title: 'Web Development with AI',
    issuer: 'Internshala Training',
    date: 'Jan 2026',
    credentialId: '3gi02opiqho',
    description:
      '8-week comprehensive training covering modern web development technologies including HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React, and AI integration in web development.',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React', 'PHP', 'DBMS', 'AI in Web Development'],
    verifyUrl: 'https://trainings.internshala.com/verify_certificate',
  },
  {
    id: 4,
    title: 'Web Development with Certification',
    issuer: 'Unlox Acedemy',
    date: 'April 2025 - June 2026',
    credentialId: 'UNXWT-TNT-1678',
    description:
      'Rigorous training focused on utilizing AI models and workflows to streamline frontend interfaces, backend application logic, and modern web application development.',
    skills: ['AI Tools Integration', 'Web Development', 'Frontend Development', 'Backend Development', 'Software Workflows'],
    verifyUrl: 'https://unlox.com', 
  },
];

const Certification = () => {
  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <p className={styles.sectionSubtitle}>
          Continuous learning and professional development through online certifications
        </p>

        <div className={styles.certificationsGrid}>
          {certificationsData.map((cert) => (
            <div key={cert.id} className={styles.certificationCard}>
              <div className={styles.cardHeader}>
                <div className={styles.certIcon}>
                  <FiAward size={24} />
                </div>
                <div className={styles.issuerInfo}>
                  <div className={styles.issuer}>{cert.issuer}</div>
                  <div className={styles.date}>{cert.date}</div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certDescription}>{cert.description}</p>

                <div className={styles.credentialInfo}>
                  <div className={styles.credentialLabel}>Credential ID</div>
                  <div className={styles.credentialId}>{cert.credentialId}</div>
                </div>

                <div className={styles.skills}>
                  {cert.skills.map((skill, index) => (
                    <span key={index} className={styles.skill}>
                      <FiCheckCircle size={12} style={{ marginRight: '4px' }} />
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verifyButton}
                  >
                    Verify Certificate
                    <FiExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
