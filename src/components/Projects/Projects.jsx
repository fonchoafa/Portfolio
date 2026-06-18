import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "./Projects.module.css";

// Project data
// Project data
const projectsData = [
  {
    id: 1,
    title: "Digital Real Estate Web App",
    description: "A secure digital real estate platform where people can find and rent properties, make hotel reservations and book trusted service providers.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "mern",
    image: "/images/spotfli.png", 
    github: "https://github.com/Miraedge-sudo/Project-Spotfli",
    live: "https://www.spotfli.com/"
  },
  {
    id: 2,
    title: "Wisdom Market Place",
    description: "A multi-vendor e-commerce web platform and downloadable Android application tailored for local businesses and service providers.",
    tags: ["TypeScript", "PHP", "Supabase", "Tailwind CSS"], 
    category: "mern", 
    image: "/images/wisdom-market.png", 
    github: "https://github.com/Miraedge-sudo/wisdom-market.git", 
    live: "https://wisdom-marketplace.com/" // Changed 'liveLink' to 'live'
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Real-time task manager with drag-and-drop functionality and team collaboration features.",
    tags: ["React", "Firebase", "Material UI"],
    category: "mern",
    image: "/images/taskMe.png",
    github: "https://github.com/fonchoafa/task-management-system",
    // live: "https://taskappdemo.com"
  },
  {
    id: 4,
    title: "Post Blogging Platform",
    description: "A platform for creating and managing blog posts with real-time collaboration features.",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    category: "mern",
    image: "/images/covedaBlog.png",
    github: "https://github.com/fonchoafa/codveda-internship.git",
    live: "https://codveda-internship-three.vercel.app/"
  },
  {
    id: 5,
    title: "Vending Machine Store",
    description: "An SEO friendly website that enables users to buy vending machines worldwide and make payment through any electronic payment gateway.",
    tags: ["WordPress", "PHP", "Woocommerce"],
    category: "wordpress",
    image: "/images/vendingmachine.png",
    // github: "https://github.com/yourusername/wp-theme",
    live: "https://bestvendingmachinestore.com/"
  },
  {
    id: 6,
    title: "Harley Parts Shop",
    description: "A website that enables people to order or buy Harley Davidson motorcycle parts and make payment through any electronic payment gateway.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    category: "wordpress",
    image: "/images/harleyshop.png",
    // github: "https://github.com/yourusername/woocommerce-store",
    live: "https://harleypartsshop.com/"
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