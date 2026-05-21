import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>
      <p className={styles.subtitle}>
        Technologies I work with and my professional journey
      </p>
      
      <div className={styles.content}>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={styles.historySection}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyHeader}>
                    <div className={styles.companyLogo}>
                      <img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                      />
                    </div>
                    <div className={styles.historyItemDetails}>
                      <h4>{historyItem.role}</h4>
                      <p className={styles.company}>{historyItem.organisation}</p>
                      <p className={styles.duration}>
                        {historyItem.endDate
                          ? `${historyItem.startDate} - ${historyItem.endDate}`
                          : historyItem.startDate}
                      </p>
                    </div>
                  </div>
                  <ul className={styles.experienceList}>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
