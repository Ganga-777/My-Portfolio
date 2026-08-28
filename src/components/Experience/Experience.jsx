import React, { useState } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend & DB", "Cloud & AI"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className={styles.container} id="experience">
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>Skills & Experience</h2>
        <p className={styles.subtitle}>
          My technical expertise and professional career journey
        </p>
      </div>

      <div className={styles.content}>
        {/* Technical Skills Section */}
        <div className={styles.skillsSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>⚡</span> Technical Skills
            </h3>
            <div className={styles.filterTabs}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${
                    activeCategory === category ? styles.activeFilterBtn : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.skillsGrid}>
            {filteredSkills.map((skill, id) => {
              return (
                <div key={id} className={styles.skillCard}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <span className={styles.skillName}>{skill.title}</span>
                </div>
              );
            })}
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
      </div>
    </section>
  );
};
