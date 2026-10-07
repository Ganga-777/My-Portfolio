import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // Group skills by category
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: "🎨",
      description: "Modern, responsive & interactive web UI engineering",
      skills: skills.filter((s) => s.category === "Frontend"),
    },
    {
      name: "Backend & Database",
      icon: "⚙️",
      description: "Scalable APIs, backend services & database systems",
      skills: skills.filter((s) => s.category === "Backend & DB"),
    },
    {
      name: "Cloud & AI Technologies",
      icon: "☁️",
      description: "Cloud infrastructure deployment & intelligent systems",
      skills: skills.filter((s) => s.category === "Cloud & AI"),
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>Skills & Experience</h2>
        <p className={styles.subtitle}>
          My technical expertise and professional career journey
        </p>
      </div>

      {/* Technical Skills Section */}
      <div className={styles.skillsSection}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.titleIcon}>⚡</span> Technical Expertise
        </h3>

        <div className={styles.categoryGrid}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <div>
                  <h4 className={styles.categoryTitle}>{cat.name}</h4>
                  <p className={styles.categoryDesc}>{cat.description}</p>
                </div>
              </div>
              <div className={styles.skillsGrid}>
                {cat.skills.map((skill, id) => (
                  <div key={id} className={styles.skillItem}>
                    <div className={styles.skillIconBox}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <span className={styles.skillName}>{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className={styles.historySection}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.titleIcon}>💼</span> Work Experience
        </h3>

        <div className={styles.timeline}>
          {history.map((historyItem, id) => {
            const isPresent = historyItem.endDate === "Present";
            return (
              <div key={id} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <div
                    className={`${styles.timelineDot} ${
                      isPresent ? styles.activeDot : ""
                    }`}
                  />
                  <div className={styles.timelineLine} />
                </div>

                <div className={styles.historyCard}>
                  <div className={styles.historyHeader}>
                    <div className={styles.companyLogo}>
                      <img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                      />
                    </div>
                    <div className={styles.historyItemDetails}>
                      <div className={styles.roleTitleRow}>
                        <h4 className={styles.roleTitle}>{historyItem.role}</h4>
                        {isPresent && (
                          <span className={styles.presentBadge}>
                            <span className={styles.pulseDot} /> Current Role
                          </span>
                        )}
                      </div>
                      <p className={styles.companyName}>
                        {historyItem.organisation}
                      </p>

                      <div className={styles.metaRow}>
                        <span className={styles.durationBadge}>
                          📅{" "}
                          {historyItem.endDate
                            ? `${historyItem.startDate} - ${historyItem.endDate}`
                            : historyItem.startDate}
                        </span>
                        {historyItem.location && (
                          <span className={styles.locationBadge}>
                            📍 {historyItem.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <ul className={styles.experienceList}>
                    {historyItem.experiences.map((experience, idx) => {
                      return (
                        <li key={idx} className={styles.experiencePoint}>
                          <span className={styles.bulletIcon}>❖</span>
                          <span>{experience}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
