import React from 'react';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import styles from './Certification.module.css';

// Certification data - Add your certifications here
const certificationsData = [
  {
    id: 1,
    title: 'Internship & Job Preparation',
    issuer: 'internshala training',
    date: 'March 2026',
    credentialId: 'c61e7m5uc9j',
    description: 'Comprehensive certification covering front-end and back-end web development, including HTML, CSS, JavaScript, React, Node.js, and more.',
    skills: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
    verifyUrl: 'https://www.freecodecamp.org/certification/fcc12345/full-stack'
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'January 2025',
    credentialId: 'FCC-RWD-2025-67890',
    description: 'Mastered the fundamentals of responsive web design, creating mobile-first layouts and accessibility best practices.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design'],
    verifyUrl: 'file:///C:/Users/PC%20USER/Desktop/Portfolio/public/certifications/Internship%20&%20Job%20Preparation%20Training%20-%20Certificate%20of%20Completion.pdf'
  },
  {
    id: 3,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'February 2025',
    credentialId: 'FCC-JS-2025-11111',
    description: 'Deep dive into JavaScript fundamentals, algorithms, data structures, and problem-solving techniques.',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
    verifyUrl: 'https://www.freecodecamp.org/certification/fcc11111/javascript-algorithms-and-data-structures'
  },
  {
    id: 4,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    credentialId: 'AWS-CCP-2024-XYZ789',
    description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, and pricing.',
    skills: ['AWS', 'Cloud Computing', 'Security', 'Architecture'],
    verifyUrl: 'https://www.credly.com/badges/aws-ccp-xyz789'
  },
  {
    id: 5,
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (Facebook)',
    date: 'November 2024',
    credentialId: 'META-FE-2024-22222',
    description: 'Professional certificate program covering front-end development with React, version control, and UI/UX principles.',
    skills: ['React', 'Version Control', 'UI/UX', 'Figma', 'Agile'],
    verifyUrl: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
  },
  {
    id: 6,
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    date: 'October 2024',
    credentialId: 'GOOGLE-UX-2024-33333',
    description: 'User experience design fundamentals, including user research, wireframing, prototyping, and usability testing.',
    skills: ['UX Design', 'User Research', 'Prototyping', 'Wireframing', 'Usability Testing'],
    verifyUrl: 'https://www.coursera.org/professional-certificates/google-ux-design'
  }
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
