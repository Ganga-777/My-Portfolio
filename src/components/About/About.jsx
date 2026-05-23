import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.intro}>
        Full Stack Developer with hands-on experience in building scalable web and mobile 
        applications. Currently contributing to enterprise systems at JumpStartNinja Technologies.
      </p>
      
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Ganga Vara Prasad"
          className={styles.aboutImage}
        />
        
        <div className={styles.aboutDetails}>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <img src={getImageUrl("skills/react.svg")} alt="Frontend" />
              </div>
              <h3>Frontend Development</h3>
              <p>React.js, React Native, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS</p>
            </div>
            
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <img src={getImageUrl("skills/dotnet.svg")} alt="Backend" />
              </div>
              <h3>Backend Development</h3>
              <p>.NET APIs, Node.js, Express.js, Java Spring Boot, REST API Integration</p>
            </div>
            
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <img src={getImageUrl("skills/mysql.svg")} alt="Database" />
              </div>
              <h3>Database & Cloud</h3>
              <p>MySQL, MongoDB, AWS Cloud Services, Database Management</p>
            </div>
            
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <img src={getImageUrl("skills/python.svg")} alt="Specialized" />
              </div>
              <h3>Specialized Skills</h3>
              <p>AI-based Applications, Real-time Systems, OpenCV, Python</p>
            </div>
          </div>
          
          <div className={styles.education}>
            <div className={styles.educationBadge}>
              <span className={styles.eduIcon}>🎓</span>
              <div className={styles.eduText}>
                <h4>B.Tech Graduate</h4>
                <p>VIT-AP University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
