import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "./Projects.module.css";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Digital Real Estate Web App",
    description: "A secure digital real estate platform where people can find and rent properties, make hotel reservations and book trusted service providers.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "mern",
    image: "/src/assets/spotfli.png", 
    github: "https://github.com/yourusername/ecommerce-app",
    live: "https://yourappdemo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time task manager with drag-and-drop functionality and team collaboration features.",
    tags: ["React", "Firebase", "Material UI"],
    category: "mern",
    image: "src/assets/taskMe.png",
    github: "https://github.com/yourusername/task-app",
    live: "https://taskappdemo.com"
  },
  {
    id: 3,
    title: "Vending Machine Store",
    description: "An SEO friendly website that enables users to buy vending machines worldwide and make payment through any electronic payment gateway.",
    tags: ["WordPress", "PHP", "Woocommerce"],
    category: "wordpress",
    image: "/src/assets/vendingmachine.png",
    github: "https://github.com/yourusername/wp-theme",
    live: "https://clientwebsite.com"
  },
  {
    id: 4,
    title: "Harley Parts Shop",
    description: "A website that enables people to order or buy Harley Davidson motorcycle parts and make payment through any electronic payment gateway.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    category: "wordpress",
    image: "/src/assets/harleyshop.png",
    github: "https://github.com/yourusername/woocommerce-store",
    live: "https://storeclient.com"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        
        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          <button 
            onClick={() => setActiveFilter("all")}
            className={`${styles.filterButton} ${activeFilter === "all" ? styles.active : ""}`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter("mern")}
            className={`${styles.filterButton} ${activeFilter === "mern" ? styles.active : ""}`}
          >
            MERN Stack
          </button>
          <button 
            onClick={() => setActiveFilter("wordpress")}
            className={`${styles.filterButton} ${activeFilter === "wordpress" ? styles.active : ""}`}
          >
            WordPress
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.projectLinks}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FiGithub size={20} />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;